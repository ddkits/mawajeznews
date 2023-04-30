/* eslint-disable no-unused-vars */
/**
 * Built by Sam Ayoub, Reallexi.com
 * https://github.com/melayyoub
 * https://mawajez.com
 * Important: To use this code please leave the copyright in place
 * Reallexi LLC, https://reallexi.com
 */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItemHeader from './NewsItemHeader';
import LatestNews from './LatestNews';
// import NewsItemHeader from './NewsItemHeader';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [headerArt, setheaderArt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [description, setdescription] = useState('');
  const [showMore, setShowmore] = useState(false);

  const updateNews = async () => {
    props.setProgress(10);
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_MAW}?page=${page}${
      props?.idfrom ? `&source_id=${props?.idfrom}` : ''
    }`;
    setLoading(true);
    await fetch(url)
      .then((data) => data.json())
      .then((x) => {
        const header = x.slice(0, 4);
        const data = x.slice(4);
        setheaderArt(header);
        setArticles(data);
      });
    props.setProgress(30);
    props.setProgress(70);
    setTotalResults(99999);
    setLoading(false);
    console.clear();
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${props?.category}`;
    updateNews();
  }, []);
  const setDescCallback = (e) => {
    setShowmore(true);
    setdescription(e);
  };
  const fetchMoreData = async () => {
    const url = `${process.env.REACT_APP_MAW}?page=${page + 1}${
      props?.idfrom ? `&source_id=${props?.idfrom}` : ''
    }`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData));
    setLoading(false);
    console.clear();
  };
  return (
    <div className="container my-3">
      {showMore && description.length > 0 ? (
        <>
          <section
            key={Math.random()}
            className="row col-md-12 sticky-top bg-dark text-light p-5 mt-5 maxw-100">
            <button
              className="btn btn-danger mt-4"
              onClick={() => {
                setShowmore(false);
              }}>
              X أغلق
            </button>
            <div
              className="align-middle text-center"
              dangerouslySetInnerHTML={{
                __html: `<div class="p-5" style="max-width: 100% !important"><style>iframe{max-width:100% !important;}</style>${
                  description.split('</iframe></p>')[1]
                    ? description.split('</iframe></p>')[0]
                    : description
                }</div>`
              }}
            />
          </section>
        </>
      ) : (
        ''
      )}
      <section className="text-center d-block ">
        <h1 style={{ marginTop: '100px' }}>
          {props?.idtitle ? `${props?.idtitle}` : ' آخر أخبار العالم والشرق الأوسط'}
        </h1>
      </section>
      <section id="latest-news" className="d-block ">
        <LatestNews data={headerArt} setDescCallback={(e) => setDescCallback(e)} />
      </section>
      <hr />
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={loading && <Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.id} className="col-md-4">
                  <NewsItem
                    author={element.author}
                    date={element.date}
                    title={element.title && element.title?.rendered ? element.title?.rendered : ''}
                    description={
                      element.content && element.content?.rendered ? element.content?.rendered : ''
                    }
                    imgUrl={element.image ? process.env.REACT_APP_MAW_SITE + element.image : null}
                    newsUrl={element.url}
                    setDescCallback={(e) => setDescCallback(e)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: 'in',

  category: 'general'
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
};

export default News;

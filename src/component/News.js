/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_MAW}?page=${page}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.group(parsedData);
    setArticles(parsedData);
    setTotalResults(99999);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - NewsZilla`;
    updateNews();
  }, []);

  // const handleScroll = (e) => {
  //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom) {
  //     setPage(page + 1);
  //     setTimeout(updateNews(), 100);
  //   }
  // };
  const fetchMoreData = async () => {
    const url = `${process.env.REACT_APP_MAW}?page=${page}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData));
    setLoading(false);
  };
  return (
    <div className="container my-3">
      <h1 style={{ marginTop: '90px' }} className="text-center">
        آخر أخبار العالم والشرق الأوسط
      </h1>
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

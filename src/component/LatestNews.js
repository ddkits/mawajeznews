/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

export default function LatestNews(props) {
  const { data } = props;
  const [dataSet, setDataset] = useState([]);
  const [showMore, setShowmore] = useState(false);
  const [bannerImg, setBannerImg] = useState('');
  const [description, setdescription] = useState('');
  const setdescriptionCallback = (x) => {
    setdescription(x);
    props?.setDescCallback(x);
  };
  useEffect(() => {
    setDataset(data);
    setBannerImg(
      process.env.REACT_APP_MAW_SITE + data[0]?.image ||
        'https://ar.mawajez.com/assets/images/optimized/gallery-img1.png'
    );
  }, [data]);
  if (dataSet.length === 0) {
    return <></>;
  } else {
    return (
      <div className="row  mt-5" data-aos="fade-up">
        <div className="col-md-8 d-block">
          <div
            className="card"
            style={{
              height: '100%',
              width: '100%',
              virticalAlign: 'middle',
              backgroundImage: `url("${bannerImg}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={() => {
              setdescriptionCallback(
                dataSet[0]?.content?.rendered
                  ? dataSet[0]?.content?.rendered
                  : dataSet[0]?.content
                  ? dataSet[0]?.content
                  : ''
              );
              setShowmore(true);
            }}>
            <div className="card-body banner-content text-light">
              <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                {dataSet[0].author}
              </div>
              <div className="fs-12">
                <div className="fs-12">{new Date(dataSet[0]?.date).toGMTString()}</div>
              </div>
              <h1 className="mb-0 card-title">
                {dataSet[0]?.title?.rendered
                  ? dataSet[0]?.title?.rendered
                  : dataSet[0]?.title
                  ? dataSet[0]?.title
                  : ''}
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-4  ">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h2>أحدث الأخبار</h2>
              {dataSet.slice(1).map((element) => {
                return (
                  <div
                    key={element.id}
                    className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    onClick={() => {
                      setdescriptionCallback(
                        element?.content?.rendered
                          ? element?.content?.rendered
                          : element?.content
                          ? element?.content
                          : ''
                      );
                      setShowmore(true);
                    }}>
                    <div className="pr-3 card-title">
                      <h5>
                        {element?.title?.rendered
                          ? element?.title?.rendered
                          : element?.title
                          ? element?.title
                          : '...'}
                      </h5>
                      <div className="fs-12">
                        <div className="fs-12">{new Date(element?.date).toGMTString()}</div>
                        <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                          {element?.author}
                        </div>
                      </div>
                    </div>
                    <div className="rotate-img">
                      <img
                        src={
                          !element?.image
                            ? 'https://ar.mawajez.com/assets/images/optimized/gallery-img1.png'
                            : process.env.REACT_APP_MAW_SITE + element?.image
                        }
                        alt={
                          element?.title?.rendered
                            ? element?.title?.rendered
                            : element?.title
                            ? element?.title
                            : '...'
                        }
                        className="thumb img-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

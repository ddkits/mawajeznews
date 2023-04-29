/**
 * Built by Sam Ayoub, Reallexi.com
 * https://github.com/melayyoub
 * https://mawajez.com
 * Important: To use this code please leave the copyright in place
 * Reallexi LLC, https://reallexi.com
 */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const NewsItem = (props) => {
  const [showMore, setShowmore] = useState(false);
  const { title, description, imgUrl, newsUrl, author, date } = props;
  return (
    <div className="col-md-12">
      <div className="card">
        {showMore ? (
          <div
            className="card-img-top"
            dangerouslySetInnerHTML={{
              __html: `<div style="max-width: 100% !important">${
                description.split('</iframe></p>')[1]
                  ? description.split('</iframe></p>')[0]
                  : description
              }</div>`
            }}></div>
        ) : (
          <img
            src={
              !imgUrl ? 'https://ar.mawajez.com/assets/images/optimized/gallery-img1.png' : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
        )}

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="badge rounded-pill text-bg-secondary">
            By {!author ? 'Unknown' : author}
          </span>
          <p className="card-text">
            <small className="text-muted">{new Date(date).toGMTString()}</small>
          </p>

          <button
            onClick={() => setShowmore(!showMore)}
            target="_blank"
            className="btn btn-sm btn-dark">
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

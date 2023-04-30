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

const NewsItemHeader = (props) => {
  const [showMore, setShowmore] = useState(false);
  const { title, description, imgUrl, newsUrl, author, date } = props;
  return (
    <div className="card bg-dark text-white">
      <img
        src={!imgUrl ? 'https://ar.mawajez.com/assets/images/optimized/gallery-img1.png' : imgUrl}
        className="card-img"
        alt="Stony Beach"
      />
      <div className="card-img-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <h5
          className="card-title"
          onClick={() => setShowmore(!showMore)}
          style={{ cursor: 'pointer' }}>
          {title}
        </h5>
        <span className="badge rounded-pill text-bg-secondary">
          By {!author ? 'Unknown' : author}
        </span>
        <p className="card-text">
          <small className="text-muted">{new Date(date).toGMTString()}</small>
        </p>
      </div>
    </div>
  );
};

export default NewsItemHeader;

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
  const [desc, setdesc] = useState('');
  const setdescriptionCallback = (x) => {
    setdesc(x);
    props?.setDescCallback(x);
  };
  return (
    <div className="col-md-12">
      <div className="card" onClick={() => setdescriptionCallback(description)}>
        <img
          src={!imgUrl ? 'https://ar.mawajez.com/assets/images/optimized/gallery-img1.png' : imgUrl}
          className="card-img-top"
          alt={title}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <div className="badge badge-danger fs-12 font-weight-bold mb-3">
            {!author ? 'Unknown' : author}
          </div>
          <p className="card-text">
            <small className="text-muted">{new Date(date).toGMTString()}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

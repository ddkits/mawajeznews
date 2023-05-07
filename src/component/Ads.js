/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Ads = (props) => {
  const { adSlot, client } = props;

  return (
    <>
      <script
        async
        src={`//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"></script>
    </>
  );
};

export default Ads;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';

const Ads = (props) => {
  const { adSlot, client } = props;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('ads issue');
    }
  }, []);
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

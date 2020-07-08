import React from 'react';
import './BannerContent.scss';
import Search from '../search/Search';

const BannerContent = () => (
  <div className="banner-content-container">
    <p className="banner-title">
      Book tours, activities, and attractions anywhere
    </p>
    <Search page="home" />
  </div>
);


export default BannerContent;

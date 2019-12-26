import React from 'react';
import './index.scss';
import Jumpstron from './Jumpstron';
import Features from './Features';
import DetailBanner from './DetailBanner';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Jumpstron/>
      <div id="features">
      <Features/>
      </div>
      <div id="banner">
      <DetailBanner/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
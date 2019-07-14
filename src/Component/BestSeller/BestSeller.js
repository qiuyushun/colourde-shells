import React from 'react';
import './BestSeller.css';
import Appheader from './Appheader/Appheader';
import TopArea from './TopArea/TopArea';
import Content from './Content/Content';
import Footer from './Footer/Footer';
function BestSeller() {
  return (
    <div className="Bestseller">
        <Appheader />
        <div className="best-body">
        <TopArea />
        <Content />
        </div>
        <Footer />
    </div>
  );
}

export default BestSeller;

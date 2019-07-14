import React from 'react';
import './Home.css';
import AppHeader from './AppHeader/AppHeader';
import TopArea from './TopArea/TopArea';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import Footer from './Footer /Footer';
function Home() {
  return (
      <div className="App">
        <AppHeader />
        <div className="home-body">
          <TopArea />
          <Nav />
          <Content />
        </div>
        <Footer />
      </div>
  );
}

export default Home;

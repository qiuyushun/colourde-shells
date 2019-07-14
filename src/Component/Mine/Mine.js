import React from 'react';
import './Mine.css';
import Header from './Header/Header';
import Footer from './Footer /Footer';
import BodyArea from './BodyArea/BodyArea';
function App() {
  return (
    <div className="mine-App">
      <Header />
      <div className="body">
        <BodyArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;

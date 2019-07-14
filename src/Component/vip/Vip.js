import React ,{Component}from 'react';
import './Vip.css';
import Head from './Head/Head.js';
import Body from './Body/Body.js';
import Footer from './Footer /Footer';

export default class App extends Component {
  render(){
  return (
    <div className="vip-App">
        <Head />
        <Body />
        <Footer />
    </div>
  );}
}


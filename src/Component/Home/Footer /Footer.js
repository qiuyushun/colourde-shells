import React from 'react';
import './Footer.css';
import {  Link } from "react-router-dom";
import footerimg1 from '../img/footerimg1.png';
import footerimg2 from '../img/footerimg2.png';
import footerimg3 from '../img/footerimg3.png';
import footerimg4 from '../img/footerimg4.png';
import footerimg5 from '../img/footerimg5.png';
export default class Footer extends React.Component{
    render(){
        return(
            <div className="home-footer">
                <div className="home-footer-mode">
                    <Link to="/" className="link">
                        <img src={footerimg1} alt="" className="home-footerimg-mode"></img>
                        <div className="home-footer-h-mode-1">首页</div>
                    </Link>
                </div>
                <div className="home-footer-mode">
                    <Link to="bestseller" className="link">
                        <img src={footerimg2} alt="" className="home-footerimg-mode"></img>
                        <div className="home-footer-h-mode">热卖</div>
                    </Link>
                </div>
                <div className="home-footer-mode">
                    <div className="home-camera-area">
                        <img src={footerimg3} alt="" className="home-footerimg-mode1"></img>
                    </div>
                </div>
                <div className="home-footer-mode">
                    <Link to="vip" className="link">
                        <img src={footerimg4} alt="" className="home-footerimg-mode"></img>
                        <div className="home-footer-h-mode">会员</div>
                    </Link>
                </div>
                <div className="home-footer-mode">
                    <Link to="mine" className="link">
                        <img src={footerimg5} alt="" className="home-footerimg-mode"></img>
                        <div className="home-footer-h-mode">我的</div>
                    </Link>
                </div>
            </div>
        )
    }
}
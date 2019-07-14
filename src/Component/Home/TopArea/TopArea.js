import React from 'react';
import './TopArea.css';
import topareaimg1 from '../img/topareaimg1.png';
import topareaimg2 from '../img/topareaimg2.png';
import topareaimg3 from '../img/topareaimg3.png';
import topareaimg4 from '../img/topareaimg4.png';
import topareaimg5 from '../img/topareaimg5.png';
import topareaimg6 from '../img/topareaimg6.png';
import topareaimg7 from '../img/topareaimg7.png';
import topareaimg8 from '../img/topareaimg8.png';

export default class TopArea extends React.Component{
    render(){
        return(
            <div className="home-top">
                <div className="home-top-area">
                    <div className="home-top-area-mode">
                        <img className="top-area-img-mode"  src={topareaimg1} alt=""></img>
                        <h6 className="top-area-h6">限时拼团</h6>
                    </div>
                    <div className="home-top-area-mode">
                        <img className="top-area-img-mode"  src={topareaimg2} alt=""></img>
                        <h6 className="top-area-h6">会员专区</h6>
                    </div>
                    <div className="home-top-area-mode">
                        <img className="top-area-img-mode"  src={topareaimg3} alt=""></img>
                        <h6 className="top-area-h6">酒店度假</h6>
                    </div>
                    <div className="home-top-area-mode">
                        <img className="top-area-img-mode"  src={topareaimg4} alt=""></img>
                        <h6 className="top-area-h6">打卡福利</h6>
                    </div>
                </div>
                <div className="home-top-area">
                        <div className="home-top-area-mode">
                            <img className="top-area-img-mode"  src={topareaimg5} alt=""></img>
                            <h6 className="top-area-h6">0元探店</h6>
                        </div>
                        <div className="home-top-area-mode">
                            <img className="top-area-img-mode"  src={topareaimg6} alt=""></img>
                            <h6 className="top-area-h6">有奖征集</h6>
                        </div>
                        <div className="home-top-area-mode">
                            <img className="top-area-img-mode"  src={topareaimg7} alt=""></img>
                            <h6 className="top-area-h6">遛娃榜单</h6>
                        </div>
                        <div className="home-top-area-mode">
                            <img className="top-area-img-mode"  src={topareaimg8} alt=""></img>
                            <h6 className="top-area-h6">精选行程</h6>
                        </div>
                </div>
            </div>
        )
    }
}
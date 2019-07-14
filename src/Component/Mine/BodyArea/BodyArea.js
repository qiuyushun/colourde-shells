import React,{Component} from 'react';
import './BodyArea.css';
import bodybottom1 from '../img/bodybottom1.png';
import bodybottom2 from '../img/bodybottom2.png';
import bodybottom3 from '../img/bodybottom3.png';
import bodybottom4 from '../img/bodybottom4.png';
import bodybottom5 from '../img/bodybottom5.png';
import bodybottom6 from '../img/bodybottom6.png';
import bodybottom7 from '../img/bodybottom7.png';
import bodybottom8 from '../img/bodybottom8.png';
import bodybottom9 from '../img/bodybottom9.png';
export default class BodyArea extends Component{
    render(){
        return(
            <div>
                <div className="mine-body-area">
                    <div className="mine-body-mode">
                        <div className="mine-center">
                            <div className="mine-body-top-area">
                                <h4 className="mine-body-head">我的预约
                                    <div className="mine-underline"></div>
                                </h4>
                                <span className="mine-arrow">
                                    <span className="mine-arrow-img"><i className="fa fa-angle-right"></i></span>
                                </span>
                            </div>
                            <div className="mine-body-bottom-area">
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom1} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">待预约</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom2} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">待打卡</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom3} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">待推荐</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom4} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">取消/售后</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mine-body-area">
                    <div className="mine-body-mode">
                        <div className="mine-center">
                            <div className="mine-body-top-area">
                                <h4 className="mine-body-head">我的资产
                                    <div className="mine-underline"></div>
                                </h4>
                                <span className="mine-arrow">
                                    <span className="mine-arrow-img"><i className="fa fa-angle-right"></i></span>
                                </span>
                            </div>
                            <div className="mine-body-bottom-area">
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom5} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">订单</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom6} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">余额</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom7} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">贝壳</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom8} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">礼券</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mine-body-area">
                    <div className="mine-body-mode">
                        <div className="mine-center">
                            <div className="mine-body-top-area">
                                <h4 className="mine-body-head">我的作品
                                    <div className="mine-underline" />
                                </h4>
                                <span className="mine-arrow">
                                    <span className="mine-arrow-img"><i className="fa fa-angle-right"></i></span>
                                </span>
                            </div>
                            <div className="mine-body-bottom-area">
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom9} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">玩法</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom9} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">采集</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom9} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">专栏</h6>
                                </div>
                                <div className="mine-body-bottom-mode">
                                    <img src={bodybottom9} alt="" className="mine-body-bottom-img"></img>
                                    <h6 className="mine-body-bottom-h6">问答</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';
import './Body.css';
import bodybottom1 from '../img/bodybottom1.png';
import bodybottom2 from '../img/bodybottom2.png';
import bodybottom3 from '../img/bodybottom3.png';
import bodybottom4 from '../img/bodybottom4.png';
import vipright1 from '../img/vipright1.png';
import vipright2 from '../img/vipright2.png';
import vipright4 from '../img/vipright4.png';
import vipright5 from '../img/vipright5.png';
import vipright6 from '../img/vipright6.png';
import vipright7 from '../img/vipright7.png';
import vipright8 from '../img/vipright8.png';

export default class Body extends  Component{
    render(){
        return(
            <div className="body">
                <div className="body-mode">
                    <div className="body-head">
                        <div className="line-left"></div>
                        <div className="point-left"></div>
                        <h5  className="body-head-content">会员省钱大法</h5>
                        <div className="line-right"></div>
                        <div className="point-right"></div>
                    </div>
                    <div className="body-bottom">
                        <div className="body-bottom-mode">
                            <div className="body-bottom-top-mode">
                                <div className="font">免</div>
                                <img className="font-img" src={bodybottom1} alt=""></img>
                            </div>
                            <h6 className="body-bottom-h6">不花钱免单</h6>
                        </div>
                        <div className="body-bottom-mode">
                            <div className="body-bottom-top-mode">
                                <div className="font">返</div>
                                <img className="font-img" src={bodybottom2} alt=""></img>
                            </div>
                            <h6 className="body-bottom-h6">消费返现金</h6>
                        </div>
                        <div className="body-bottom-mode">
                            <div className="body-bottom-top-mode">
                                <div className="font">赚</div>
                                <img className="font-img" src={bodybottom3} alt=""></img>
                            </div>
                            <h6 className="body-bottom-h6">赚取零花钱</h6>
                        </div>
                        <div className="body-bottom-mode">
                            <div className="body-bottom-top-mode">
                                <div className="font">折</div>
                                <img className="font-img" src={bodybottom4} alt=""></img>
                            </div>
                            <h6 className="body-bottom-h6">会员价省钱</h6>
                        </div>
                    </div>
                </div>
                <div className="body-mode">
                    <div className="body-head">
                        <div className="line-left"></div>
                        <div className="point-left"></div>
                        <h5  className="body-head-content">会员专属权利</h5>
                        <div className="line-right"></div>
                        <div className="point-right"></div>
                    </div>
                    <div className="body-bottom1">
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright1} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">免拼团购买</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright2} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">退改优惠</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright1} alt=""></img>
                                <div className="update">即将上线</div>
                            </div>
                            <h5 className="body-right-h5-mode">抢先购买</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright4} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">专属客服</h5>
                        </div>
                    </div>
                    <div className="body-bottom1">
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright5} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">专家问答</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright6} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">提前预约</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright7} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">会员遛娃节</h5>
                        </div>
                        <div className="body-right-mode">
                            <div className="body-right-img-area">
                                <img className="body-right-img-mode" src={vipright8} alt=""></img>
                            </div>
                            <h5 className="body-right-h5-mode">会员专场</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import './Nav.css';

export default class Nav extends React.Component{
    render(){
        return(
            <div className="home-nav">
                <div className="nav-list">
                    <div className="nav-mode">关注</div>
                    <div className="nav-mode">推荐</div>
                    <div className="nav-mode">附近</div>
                    <div className="nav-mode">玩新鲜</div>
                    <div className="nav-mode">大自然</div>
                    <div className="nav-mode">亲子餐</div>
                    <div className="nav-mode">启蒙课</div>
                    <div className="nav-mode">周边游</div>
                    <div className="nav-mode">去度假</div>
                    <div className="nav-mode">晒萌娃</div>
                    <div className="nav-mode">益智玩</div>
                    <div className="nav-mode">身体棒</div>
                </div>
            </div>
        )
    }
}
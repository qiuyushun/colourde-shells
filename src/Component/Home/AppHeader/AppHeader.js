import React from 'react';
import './AppHeader.css';
import headerright from '../img/headerright.png';
export default class AppHeader extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="header-left">上海</div>
                <span className="home-select">
                    <i className="fa fa-angle-down"></i>
                </span>
                <div className="home-searchbox">
                    <input defaultValue="搜索玩法、商品和用户"></input>
                </div>
                <div className="header-right">
                    <img className="header-right-img" src={headerright} alt=""/>
                </div>
            </div>
        )
    }
}


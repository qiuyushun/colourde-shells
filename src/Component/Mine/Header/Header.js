import React,{Component} from 'react';
import './Header.css';
import headleft from '../img/headleft.png';
import setting from '../img/setting.png';
export default class Header extends Component{
    render(){
        return(
            <div className="mine-head-area">
                <div className="mine-head-back"></div>
                <div className="mine-head">
                    <div className="mine-head-information-area">
                        <div className="mine-head-left">
                            <img className="mine-head-left-img" src={headleft} alt=""></img>
                            <div className="mine-log">未登录</div>
                        </div>
                            <img className="mine-setting" src={setting} alt=""></img>
                            <span className="mine-more"><i className="fa fa-angle-right"></i></span>
                    </div>
                </div>
            </div>
        )
    }
} 
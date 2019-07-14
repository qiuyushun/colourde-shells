import React ,{Component} from 'react';
import './Appheader.css';
import '../../FontAwesome/FontAwesome';
export default class Appheader extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-left">上海</div>
                <span className="best-select">
                    <i className="fa fa-angle-down"></i>
                </span>
                <div className="header-center">热卖</div>
                <div className="best-header-right">加入会员</div>
            </div>
        )
    }
}
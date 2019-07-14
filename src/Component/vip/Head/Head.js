import React,{Component} from 'react';
import './Head.css';
import headimg from '../img/headimg.png';
export default class Head extends Component {
    render(){
        return(
        <div className="head">
            <div className="img-area">
                <img className="head-img" src={headimg} alt=""></img>
            </div>
        </div>
        )
    }
}
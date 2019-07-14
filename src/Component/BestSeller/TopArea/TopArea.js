import React ,{Component} from 'react';
import './TopArea.css';
import topareaimg1 from '../img/topareaimg1.png';
import topareaimg2 from '../img/topareaimg2.png';
import topareaimg3 from '../img/topareaimg3.png';
import topareaimg4 from '../img/topareaimg4.png';
import topareaimg5 from '../img/topareaimg5.png';
import topareaimg6 from '../img/topareaimg6.png';
import topareaimg7 from '../img/topareaimg7.png';
import topareaimg8 from '../img/topareaimg8.png'
export default class TopArea extends Component{
    render(){
        return(
            <div className="best-top">
                <div className="top-area">
                    <div className="best-top-area-mode">
                        <img className="bestseller-top-area-img-mode"  src={topareaimg1} alt=""></img>
                        <h6 className="top-area-h6">儿童乐园</h6>
                    </div>
                    <div className="best-top-area-mode">
                        <img className="bestseller-top-area-img-mode"  src={topareaimg2} alt=""></img>
                        <h6 className="top-area-h6">展览演出</h6>
                    </div>
                    <div className="best-top-area-mode">
                        <img className="bestseller-top-area-img-mode"  src={topareaimg3} alt=""></img>
                        <h6 className="top-area-h6">酒店度假</h6>
                    </div>
                    <div className="best-top-area-mode">
                        <img className="bestseller-top-area-img-mode"  src={topareaimg4} alt=""></img>
                        <h6 className="top-area-h6">在线课程</h6>
                    </div>
                </div>
                <div className="top-area">
                        <div className="best-top-area-mode">
                            <img className="bestseller-top-area-img-mode"  src={topareaimg5} alt=""></img>
                            <h6 className="top-area-h6">迪士尼专区</h6>
                        </div>
                        <div className="best-top-area-mode">
                            <img className="bestseller-top-area-img-mode"  src={topareaimg6} alt=""></img>
                            <h6 className="top-area-h6">亲子美食</h6>
                        </div>
                        <div className="best-top-area-mode">
                            <img className="bestseller-top-area-img-mode"  src={topareaimg7} alt=""></img>
                            <h6 className="top-area-h6">冬夏令营</h6>
                        </div>
                        <div className="best-top-area-mode">
                            <img className="bestseller-top-area-img-mode"  src={topareaimg8} alt=""></img>
                            <h6 className="top-area-h6">全部</h6>
                        </div>
                </div>
            </div>
        )
    }
}
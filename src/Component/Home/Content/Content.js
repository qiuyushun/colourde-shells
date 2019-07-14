import React ,{Component}from 'react';
import './Content.css';
import contentimg1 from '../img/contentimg1.png';
import contentimg2 from '../img/contentimg2.png';
import contentimg3 from '../img/contentimg3.png';
import contentimg4 from '../img/contentimg4.png';
export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <div className="content-area">
                    <div className="content-area-left">
                        <div className="home-content-mode">
                            <img src={contentimg1} alt="" className="home-content-img-mode"></img>
                            <div className="home-comment">化身小小考古家，打卡新晋互动艺术大展！</div>
                            <div className="home-tips-area">
                                <span className="home-tips-left">
                                    <i class="fas fa-map-marker-alt loca"></i>
                                </span>
                                <div className="home-distance">21km</div>
                                <span className="home-zan">
                                    <i class="far fa-heart  heart"></i>
                                </span>
                                <div className="home-numbers">135</div>
                            </div>
                        </div>
                        <div className="home-content-mode">
                            <img src={contentimg3} alt="" className="home-content-img-mode"></img>
                            <div className="home-comment">就在兴业太古汇！免费互动乐园，还有海洋球池</div>
                            <div className="home-tips-area">
                                <span className="home-tips-left">
                                    <i class="fas fa-map-marker-alt loca"></i>
                                </span>
                                <div className="home-distance">5.2km</div>
                                <span className="home-zan">
                                    <i class="far fa-heart  heart"></i>
                                </span>
                                <div className="home-numbers">216</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-area-right">
                        <div className="home-content-mode">
                            <img src={contentimg2} alt="" className="home-content-img-mode"></img>
                            <div className="home-comment">汪汪队迷们由福啦！虹桥天地免费互动主题展来袭</div>
                            <div className="home-tips-area">
                                <span className="home-tips-left">
                                    <i class="fas fa-map-marker-alt loca"></i>
                                </span>
                                <div className="home-distance">9.6km</div>
                                <span className="home-zan">
                                    <i class="far fa-heart  heart"></i>
                                </span>
                                <div className="home-numbers">192</div>
                            </div>
                        </div>
                        <div className="home-content-mode">
                                <img src={contentimg4} alt="" className="home-content-img-mode"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React ,{Component} from 'react';
import './Content.css';
import contentimg1 from '../img/contentimg1.png';
import contentimg2 from '../img/contentimg2.png';
export default class Content extends Component{
    render(){
        return(
            <div className="recommend">
                <div className="empty"></div>
                <div className="content-all">
                    <div className="nav">
                        <div>精选推荐</div>
                        <div className="underline"></div>
                    </div>
                    <div className="content-mode">
                        <div className="content-left-mode">
                            <img className="content-img-mode" src={contentimg1} alt=""></img>
                        </div>
                        <div className="content-right-mode">
                            <h4 className="content-title">独家6店通用！从吉普岛空运的第一手新鲜食材！暑期全覆盖</h4>
                            <div className="location">
                                <h5 className="usage">[6店通用]泰岛.吉普天堂</h5>
                                <div className="distance">11km</div>
                            </div>
                            <div className="cost">
                                <div className="number">2人团</div>
                                <div className="rmb">¥</div>
                                <div className="money">99</div>
                                <div className="origin-money">
                                    <div className="original">¥163</div>
                                    <div className="line"></div>
                                </div>
                                <div className="now">马上抢</div>
                            </div>
                            <div className="tips">
                                <div className="time">周末可用</div>
                                <div className="age">年龄不限</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-mode">
                        <div className="content-left-mode">
                            <img className="content-img-mode" src={contentimg2} alt=""></img>
                        </div>
                        <div className="content-right-mode">
                            <h4 className="content-title">最后1天！家门口1000m主题乐园畅玩卡！自带能滑草的超大草坪让你一次玩个够！</h4>
                            <div className="location">
                                <h5 className="usage">[嘉定镇]唯美堡儿童乐园</h5>
                                <div className="distance">11km</div>
                            </div>
                            <div className="cost">
                                <div className="number">3人团</div>
                                <div className="rmb">¥</div>
                                <div className="money">59</div>
                                <div className="origin-money">
                                    <div className="original">¥384</div>
                                    <div className="line"></div>
                                </div>
                                <div className="now">马上抢</div>
                            </div>
                            <div className="tips">
                                <div className="time">明日可约</div>
                                <div className="age">1-12岁</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-mode">
                        <div className="content-left-mode">
                            <img className="content-img-mode" src={contentimg2} alt=""></img>
                        </div>
                        <div className="content-right-mode">
                            <h4 className="content-title">最后1天！家门口1000m主题乐园畅玩卡！自带能滑草的超大草坪让你一次玩个够！</h4>
                            <div className="location">
                                <h5 className="usage">[嘉定镇]唯美堡儿童乐园</h5>
                                <div className="distance">11km</div>
                            </div>
                            <div className="cost">
                                <div className="number">3人团</div>
                                <div className="rmb">¥</div>
                                <div className="money">59</div>
                                <div className="origin-money">
                                    <div className="original">¥384</div>
                                    <div className="line"></div>
                                </div>
                                <div className="now">马上抢</div>
                            </div>
                            <div className="tips">
                                <div className="time">明日可约</div>
                                <div className="age">1-12岁</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
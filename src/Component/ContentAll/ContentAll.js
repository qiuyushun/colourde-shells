import React ,{Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from '../Home/Home';
import BestSeller from '../BestSeller/BestSeller';
import Vip from '../vip/Vip';
import Mine from '../Mine/Mine';

export default class ContentAll extends Component {
    render() {
      return (
         <BrowserRouter>
              <Route path={'/'} exact component={Home} />
              <Route path={'/bestseller'} component={BestSeller} />
              <Route path={'/vip'} component={Vip}/>
              <Route path={'/mine'} component={Mine}/>
        </BrowserRouter>
      );
    }
  };//路由
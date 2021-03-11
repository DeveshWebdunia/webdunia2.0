import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/home';
import ArticleDetails from './pages/Articledetail/articledetail';
import Categorylisting from './pages/categorylisting/categorylisting';
import Photogallery from './pages/Photogallery/photogallery';
import Photodetail from './pages/Photodetail/photodetail';


const Routes_menu = () => {
    return(
        <Router basename="/test/react2">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articledetail" component={ArticleDetails} />
                <Route exact path="/categorylisting" component={Categorylisting} />
                <Route exact path="/photogallery" component={Photogallery} />
                <Route exact path="/photodetail" component={Photodetail} />
            </Switch>
        </Router>
    )
};



export default Routes_menu;
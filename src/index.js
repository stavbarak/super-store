import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from 'components/MainPage';
import ItemInfo from 'components/ItemInfo';


ReactDOM.render(
    <Root >
        <BrowserRouter>
            <Switch>
                <Route path="/:id/:tab" component={ ItemInfo } />
                <Route path="/" component={ MainPage } />
            </Switch>
      </BrowserRouter>
    </Root>,
    
    
    document.getElementById('root'));


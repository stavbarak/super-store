import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Store from 'components/Store';
import ItemInfo from 'components/ItemInfo';
import App from 'components/App';
import Welcome from 'components/Welcome';

ReactDOM.render(
    <Root >
        <BrowserRouter>
            <App>
                <Route path="/:id/:tab" component={ ItemInfo } />
                <Route path="/store" component={ Store } />
                <Route path="/" component={ Welcome } />
            </App>
      </BrowserRouter>
    </Root>,
    
    
    document.getElementById('root'));


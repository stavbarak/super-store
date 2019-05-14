import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
import store from './redux/configureStore';
import './index.css';
import App from './App';
// import reducers from './redux/reducers';


// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root'));


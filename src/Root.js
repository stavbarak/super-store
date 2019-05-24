import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
/* import store from './redux/configureStore'; */
import reducers from 'redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default({ children }) => {
    return (
    <Provider store={createStoreWithMiddleware(reducers)} >
       { children }
    </Provider>
    )
}
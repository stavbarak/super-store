import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import productsReducer from 'redux/reducers';
import authReducer from 'redux/reducers';
import thunk from 'redux-thunk';

const reducer = {
  products: productsReducer,
  auth: authReducer
}

const store = configureStore({
  reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export default store
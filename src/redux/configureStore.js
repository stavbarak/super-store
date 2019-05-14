import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export default store
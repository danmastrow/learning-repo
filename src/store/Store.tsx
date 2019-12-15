import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/CounterReducer';
const rootReducer = combineReducers({ counterReducer: counterReducer });
const store = configureStore({
  reducer: rootReducer
});
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default;
//     store.replaceReducer(newRootReducer);
//   });
// }
export type AppDispatch = typeof store.dispatch;
export default store;

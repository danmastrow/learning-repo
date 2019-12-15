import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/CounterReducer';
const store = configureStore({
  reducer: counterReducer
});
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default;
//     store.replaceReducer(newRootReducer);
//   });
// }
export type AppDispatch = typeof store.dispatch;
export default store;

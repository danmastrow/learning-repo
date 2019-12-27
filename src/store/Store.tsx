import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './reducers/CounterReducer';
import pingPong from './reducers/PingPongReducer';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingEpic from './epics/pingEpic';
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({ counter, pingPong });
const rootEpic = combineEpics(pingEpic);
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export default store;

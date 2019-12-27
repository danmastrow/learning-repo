import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pingPong from "./reducers/PingPongReducer";
import films, { getFilms } from "./reducers/FilmsReducer";
import layout from "./reducers/LayoutReducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import filmsEpic from "./epics/filmsEpic";
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({ pingPong, layout, films });
const rootEpic = combineEpics(filmsEpic);
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
store.dispatch(getFilms());
export default store;

import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import createReduxMiddleware from "redux-saga";
import { rootSaga } from "../saga";

const sagaMiddleware = createReduxMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;

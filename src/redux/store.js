import { applyMiddleware, createStore } from "redux";
import createReduxMiddleware from "redux-saga";
import { rootSaga } from "../saga";
import { carts } from "./reducers/cart_reducer";

const sagaMiddleware = createReduxMiddleware();
const store = createStore(carts, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;

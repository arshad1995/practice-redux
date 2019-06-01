import { createStore,combineReducers,applyMiddleware } from "redux";
import newsReducer from "./reducers/news.reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
    news:newsReducer
})

const store=createStore(reducers,applyMiddleware(thunk,logger))


export default store;

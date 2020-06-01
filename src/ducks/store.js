import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from "./budgetReducer";
import userReducer from "./userReducer";

const rootReducter = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducter, applyMiddleware(promiseMiddleware))
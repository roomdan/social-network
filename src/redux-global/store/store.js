import thunk from "redux-thunk";
import { GoogleAuth } from "../reducers/Google.sesion.reducer";
import { posts } from "../reducers/post.reducer";

const { combineReducers, createStore, applyMiddleware, compose } = require("redux");

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    post:posts,
    GoogleUser:GoogleAuth,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
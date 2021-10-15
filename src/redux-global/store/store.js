import thunk from "redux-thunk";
import { comments } from "../reducers/comments.reducer";
import { isError } from "../reducers/errors.reducer";
import { GoogleAuth } from "../reducers/Google.sesion.reducer";
import { posts } from "../reducers/post.reducer";
import { savePost } from "../reducers/saveUser.reducer";
import { UserData } from "../reducers/userInfo.reducer";

const { combineReducers, createStore, applyMiddleware, compose } = require("redux");

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    post:posts,
    GoogleUser:GoogleAuth,
    Errors:isError,
    commentId:comments,
    postSaved:savePost,
    userInfo:UserData,
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
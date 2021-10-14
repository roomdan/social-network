// import { GetAxios } from "../../java-script.-logic/https-request/get-posts";
import { types } from "../types/types";

const getDefault = {}

export const posts = (state= getDefault, action )=>{
    switch(action.type) {
       case types.getPosts:
           return [...state, action.payload]
        default :
        return state;
    }
}
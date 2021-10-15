import { types } from "../types/types";

export const savePost = (state = Object(), action)=>{
    switch (action.type) {
        case types.savePost:
            return action.payload
        default:
            return state
    }
}
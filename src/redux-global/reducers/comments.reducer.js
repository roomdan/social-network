import { types } from "../types/types";

export const comments = (state = String(), action)=>{
    switch (action.type) {
        case types.viewCommens:
            return action.payload
        default:
            return state
    }
}
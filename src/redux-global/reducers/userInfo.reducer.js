import { types } from "../types/types";

export const UserData = (state = Object(), action)=>{
    switch (action.type) {
        case types.userInfo:
            return action.payload
        default:
            return state
    }
}
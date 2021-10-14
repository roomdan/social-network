import { types } from "../types/types";


export const isError = (state = String('NOT EXIST ERROR'),action )=>{
    switch(action.type) {
        case types.newErrorModule:
            return action.error
        default:
            return state
    }
}
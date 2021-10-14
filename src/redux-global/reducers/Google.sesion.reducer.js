import { types } from "../types/types"


export const GoogleAuth = (state=Object(), action) => {
    switch(action.type) {
        case types.onGoogleSesion:
            return action.payload
        default:
            return state
    }
}
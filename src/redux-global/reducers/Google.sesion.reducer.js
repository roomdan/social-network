import { types } from "../types/types"

const init = {
    credential:{
        accessToken:''
    }
}

export const GoogleAuth = (state=init, action) => {
    switch(action.type) {
        case types.onGoogleSesion:
            return action.payload;
        case types.EmailRegister:
            return action.payload
        default:
            return state
    }
}
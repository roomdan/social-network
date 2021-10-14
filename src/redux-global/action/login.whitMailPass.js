import {  firebase } from "../../firebases-all/config-general/firebase.config"
import { types } from "../types/types";

export const LogWhitMailandPassword = ({email, password})=>{
    return async (dispatch)=>{
       try {
           const authmail = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(filUserInfo(authmail))
       } catch (error) {
            dispatch(erroData(error))
       }
    }
}

const filUserInfo = payload=>({
    type:types.EmailRegister,
    payload
})

const erroData = payload=>({
    type:types.newErrorModule,
    error:payload
})
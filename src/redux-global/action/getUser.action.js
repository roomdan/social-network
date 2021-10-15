import axios from "axios"
import { types } from "../types/types";


export const getFullUserInfo = (id)=>{
    return async (dispatch)=>{
        const pet = await axios(`https://dummyapi.io/data/v1/user/${id}`, {headers:{
            'app-id':'61682885c5ac5b5bc4701902'
        }});
        dispatch(saveUserInfo(pet))
    }
}

export const saveUserInfo = (payload)=>({
    type:types.userInfo,
    payload
})
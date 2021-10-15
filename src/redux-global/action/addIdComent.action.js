import axios from "axios"
import { types } from "../types/types";


export const getComments = (id)=>{
    return async (dispatch)=>{
        const pet = await axios(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`, {headers:{
            'app-id':'61682885c5ac5b5bc4701902'
        }});
        dispatch(saveComment(pet))
    }
}

export const saveComment = (payload)=>({
    type:types.viewCommens,
    payload
})
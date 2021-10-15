import { types } from "../types/types";

export const savePost = (payload)=>({
    type:types.savePost,
    payload
})
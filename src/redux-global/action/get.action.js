import { types } from "../types/types";

export const getPostInfo = payload=>({
    type:types.getPosts,
    payload
})
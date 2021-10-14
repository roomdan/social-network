import { GoogleProvider, firebase, GitHubProvider } from "../../firebases-all/config-general/firebase.config"
import {types} from "../types/types"

export const GoogleSesionAuth = ()=>{
    return async (dispatch)=>{
        const response = await firebase.auth().signInWithPopup(GoogleProvider);
        dispatch(GoogleGetUserData(response))
}
}

export const GitHubAuthProvider = ()=>{
    return async (dispatch)=>{
        const response = await firebase.auth().signInWithCredential(GitHubProvider);
        dispatch(GoogleGetUserData(response))
    }
}

export const GoogleGetUserData = payload => (
    {
        type:types.onGoogleSesion,
        payload:payload,
    }
)
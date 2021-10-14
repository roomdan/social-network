import { GoogleProvider, firebase, GitHubProvider} from "../../firebases-all/config-general/firebase.config"

export const GoogleSesionAuth = ()=>{
    return async ()=>{
        const response = await firebase.auth().signInWithPopup(GoogleProvider);
        console.log(response);
}
}

export const GitHubAuthProvider = ()=>{
    return async ()=>{
        const response = await firebase.auth().signInWithCredential(GitHubProvider);
        console.log(response);
    }
}
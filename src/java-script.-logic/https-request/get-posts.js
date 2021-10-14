import axios from "axios";

const url = 'https://dummyapi.io/data/v1/?id=6167bf576464973bd4b34751'

async function GetAxios () {
    return await axios(
        {
            method:'GET',
            baseURL:url,
        }
    )
}

export {GetAxios}
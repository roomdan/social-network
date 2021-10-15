import axios from "axios";

const url = 'https://dummyapi.io/data/v1/user?created=1'
async function GetAxios () {
   try {
    const resp = await axios.get(url, {headers:{
        'app-id':'61682885c5ac5b5bc4701902'
    }})
    console.log(resp);
   }
   catch(error) {
       console.log(error);
   }
}

export {GetAxios}
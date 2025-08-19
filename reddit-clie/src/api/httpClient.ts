import axios from "axios";



const httpClient=axios.create({
    baseURL:"https://www.reddit.com/r",
    timeout:1000,
    headers:{
        "Content-Type":"application/json",
        "User-Agent": "MyRedditApp/1.0 (by u/ElephantFew204)"
    }
})


export default httpClient;
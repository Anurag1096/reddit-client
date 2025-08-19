import httpClient from "./httpClient";


export const getSubReddit=(name:string)=>httpClient.get(`/${name}.json`)
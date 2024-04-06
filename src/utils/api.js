import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY
const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers:{
        Accept:'accept: application/json',
        Authorization:`Bearer ${API_KEY}`
    }
})
// axios interceptors(res,req 요청 전에 가로채서 작업수행)
export default instance
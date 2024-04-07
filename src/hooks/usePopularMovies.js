import { useQuery } from "@tanstack/react-query";
import api from '../utils/api'
const fetchUrl=()=>{
    return api.get(`/movie/popular`)
}

export const usePopularQuery=()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchUrl,
        select:(res)=>res.data
        })
}
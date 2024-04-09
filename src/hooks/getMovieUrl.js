import { useQuery } from "@tanstack/react-query";
import api from '../utils/api'
// popular movie
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
// top rated movie
const fetchRatedMoiveUrl =()=>{
    return api.get(`/movie/top_rated`)
}
export const useTopRatedQuery=()=>{
    return useQuery({
        queryKey:['movie-rated'],
        queryFn:fetchRatedMoiveUrl,
        select:(res)=>res.data
    })
}

// upcoming movie
const fetchUpcomingMv = () =>{
    return api.get('/movie/upcoming')
}

export const useUpcomingQuery=()=>{
    return useQuery({
        queryKey:['upcoming-movie'],
        queryFn:fetchUpcomingMv,
        select:(res)=>res.data
    })
}

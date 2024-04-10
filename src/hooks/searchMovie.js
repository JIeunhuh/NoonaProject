import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'
const fetchMvUrl=({kw,page})=>{
    return kw? api.get(`/search/movie?q=${kw}&page=${page}`):api.get(`/movie/popular?page=${page}`)
}
export const useSearchMovie=({kw,page})=>{
    return useQuery({
        queryKey:['mv-search',[kw,page]],
        queryFn:()=>fetchMvUrl({kw,page}),
        select:(res)=>res.data
    })
}
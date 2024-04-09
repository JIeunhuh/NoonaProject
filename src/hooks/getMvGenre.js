import {useQuery} from '@tanstack/react-query'
import api from'../utils/api'
const fetchMvGenre=()=>{
    return api.get('/genre/movie/list')
}
export const useMvGenreQuery=()=>{
    return useQuery({
        queryKey:['get-genre'],
        queryFn: fetchMvGenre,
        select:(res)=>res.data.genres,
        staleTime:300000
    })
}
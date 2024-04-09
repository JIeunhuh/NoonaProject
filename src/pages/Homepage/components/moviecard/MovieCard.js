import React from 'react'
import { Badge } from 'react-bootstrap'
import './Moviecard.style.css'
import { useMvGenreQuery } from '../../../../hooks/getMvGenre'

export const MovieCard = ({ movie }) => {
    const {data:genreData}=useMvGenreQuery()
    const showGenre=(id)=>{
        if(!genreData) return []
        const genreNameList=id.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id === id)
            return genreObj.name
        })

        return genreNameList
    }
    return (
        <div
            style={{
                backgroundImage: 'url(' +
                    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`
                    + ')'
            }}
            className='movie-card'>
            <div className='overlay'>
                <h1 style={{fontSize:'100%'}}>{movie.title}</h1>
                {showGenre(movie.genre_ids).map((item, idx) => <Badge style={{marginLeft:'1.5%', marginRight:'1.5%'}} bg='danger' key={idx}>{item}</Badge>)}
                <div >
                    <div>{movie.vote_average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? 'over18' : 'under18'}</div>
                </div>
            </div>
        </div>
    )
}

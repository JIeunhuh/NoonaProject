import React from 'react'
import { usePopularQuery } from '../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import './Banner.style.css'

export const Banner = () => {
  const {data, isLoading, isError, error} = usePopularQuery()
  console.log('data',data)
  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  if(isError){
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div style={{
        backgroundImage:
        'url('+
        `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`+
        ')',
        backgroundSize:'cover'
    }}
    className='banner'>
        <div className='text-white bannerTxt'>
            <h1>{data?.results[0].title}</h1>
            <div>{data?.results[0].overview}</div>
        </div>
    </div>
  )
}

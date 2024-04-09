import React from 'react'
import { usePopularQuery } from '../../../../hooks/getMovieUrl'
import { Alert } from 'react-bootstrap'
import { MovieSlide } from '../../../../common/MovieSlide/MovieSlide';
import { responsive } from '../../../../constants/responsive';

export const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
  
    return (
        <div>
          <MovieSlide title='Popular Movies' data={data.results} responsive={responsive}/> 
        </div>
    )
}

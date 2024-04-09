import React from 'react'
import { Alert } from 'react-bootstrap'
import { MovieSlide } from '../../../../common/MovieSlide/MovieSlide';
import { responsive } from '../../../../constants/responsive';
import { useUpcomingQuery } from '../../../../hooks/getMovieUrl';

export const UpcomingMovieSlide = () => {
    const {data, isLoading, isError, error} = useUpcomingQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
  
    return (
        <div>
          <MovieSlide title='Upcoming Movies' data={data.results} responsive={responsive}/> 
        </div>
    )
}
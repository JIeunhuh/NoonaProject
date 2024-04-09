import React from 'react'
import { useTopRatedQuery } from '../../../../hooks/getMovieUrl'
import {Alert} from 'react-bootstrap'
import { MovieSlide } from '../../../../common/MovieSlide/MovieSlide'
import { responsive } from '../../../../constants/Responsive'

export const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlide title='Top-rated Movies' data={data.results} responsive={responsive} />
        </div>
    )
}

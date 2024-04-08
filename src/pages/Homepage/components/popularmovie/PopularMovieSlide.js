import React from 'react'
import { usePopularQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MovieCard } from '../moviecard/MovieCard';
import './PopularMovieSlide.style.css'

export const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    else if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div>
            <h3>The Popular Movies</h3>
            <Carousel 
                centerMode={true}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="movie-slider p-1">
                    {data.results.map((item,idx)=><MovieCard movie={item} key={idx}/>)}
                </Carousel>
        </div>
    )
}

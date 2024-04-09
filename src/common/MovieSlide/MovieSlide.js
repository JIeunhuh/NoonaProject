import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './MovieSlide.style.css'
import MovieCard from '../moviecard/MovieCard'
export const MovieSlide = ({ title, data, responsive }) => {
    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                centerMode={true}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="movie-slider p-1">
                {data.map((item, idx) => <MovieCard movie={item} key={idx} />)}
            </Carousel></div>
    )
};


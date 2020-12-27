import React,{Fragment}from 'react';
//config
import {
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
}from '../config';
//images
import NoImage from '../images/no_image.jpg';
//hooks
import {useMovieFetch} from '../hooks/useHomeFetch';
//components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';

const Home = () => {

    const {state,loading,error} = useMovieFetch();

    return (
        <Fragment>

            {state.results[0] ? 
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]}.backdrop_path`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            /> 
            : null}

            <Grid header="Popular Movies">
                {state.results.map(movie=>(
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "No Image"
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            
        </Fragment>
    )
}

export default Home;

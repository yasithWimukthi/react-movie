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
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {

    const {state,loading,error,searchTerm,setSearchTerm} = useMovieFetch();

    return (
        <Fragment>

            {!searchTerm && state.results[0] ? 
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]}.backdrop_path`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            /> 
            : null}

            <SearchBar setSearchTerm={setSearchTerm}/>

            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
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
            <Spinner />
        </Fragment>
    )
}

export default Home;

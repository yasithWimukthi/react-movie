import React,{Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {IMAGE_BASE_URL,POSTER_SIZE} from '../config';
import Grid from './Grid/Grid';
import spinner from './Spinner/Spinner';
import {useMovieFetch} from '../hooks/useMovieFetch';
import NoImage from '../images/no_image.jpg';

const Movie = () => {

    const {movieId} = useParams();
    const {state:movie,loading,error} = useMovieFetch(movieId);

    return (
        <Fragment>
            Movie
        </Fragment>
    )
}

export default Movie;

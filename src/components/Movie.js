import React,{Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {IMAGE_BASE_URL,POSTER_SIZE} from '../config';
import Grid from './Grid/Grid';
import spinner from './Spinner/Spinner';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import {useMovieFetch} from '../hooks/useMovieFetch';
import NoImage from '../images/no_image.jpg';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/Actor';

const Movie = () => {

    const {movieId} = useParams();
    const {state:movie,loading,error} = useMovieFetch(movieId);

    if(loading){
        return <spinner />
    }

    if(error){
        return <div>Something went wrong</div>
    }

    return (
        <Fragment>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />

            <Grid header="Acrots">
                {movie.actors.map(actor=>(
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                        }
                    />
                ))}
            </Grid>

        </Fragment>
    )
}

export default Movie;

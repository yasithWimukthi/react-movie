import React from 'react';
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

const Home = () => {

    const {state,loading,error} = useMovieFetch();

    return (
        <div>
            home page
        </div>
    )
}

export default Home;

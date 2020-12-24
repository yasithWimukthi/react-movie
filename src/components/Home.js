import React , {useState,useEffect} from 'react';
import API from '../API';
//config
import {
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
}from '../config';

//images
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const[state,setState] = useState();
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);

    const fetchMovies = async (page,searchTerm="") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm,page);
            console.log(movies);

            setState(prev =>({
                ...movies,
                results: page > 1 ? [...prev.results , ...movies.results] : [...movies.results]
            }))

        }catch(err){
            setError(true);
        }

        setLoading(false);
    }

    //Initial render
    useEffect(()=>fetchMovies(1),[]);

    return (
        <div>
            home page
        </div>
    )
}

export default Home;

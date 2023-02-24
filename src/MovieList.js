import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

function MovieList(){
    
    const[datamovies,setdatamovie] = useState([])

    useEffect(() => {
        axios.get('api/movie/getmovie').then(res =>{
            console.log(res.data)
            setdatamovie(res.data)
        }).catch(err =>{
            console.log(err)})
        },[])
}

export default MovieList;
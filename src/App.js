import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from '../public/search-icon.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c0a6746d"

const App = () => {

    const searchMovies = async (title) => {
        const response =  await fetch(`${API_URL}&s=${title}`);
        const result =  await response.json();

        result.Response === "True" ? console.log(result.Search) : console.log("Movie Not Found");;
    }

    useEffect(() => {
        searchMovies('La La Land');
    }, [])

    return(
        <div className='App'>
            <h1>Movie App</h1>
            <p>Find your movie</p>
            
        </div>
    );
}

export default App;
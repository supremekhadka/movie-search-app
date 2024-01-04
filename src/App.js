import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search-icon.svg';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c0a6746d"

const App = () => {

    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    const searchMovies = async (title) => {
        const response =  await fetch(`${API_URL}&s=${title}`);
        const result =  await response.json();

        result.Response === "True" ? setMovies(result.Search) : console.log("ERROR");;
    }

    useEffect(() => {
        searchMovies('La La Land');
    }, [])

    return(
        <div className='App'>
            <h1>Movie App</h1>
            <pre>F i n d    y o u r    m o v i e</pre>

            <div className='search'>
                <input
                    placeholder='Search for a movie'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(key) => {
                        if(key.keyCode === 13){
                            searchMovies(searchTerm);
                        }
                    }}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>
            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie = {movie} />
                        ))}
                    </div>
                ) : (
                    <div className='movies-not-found'>
                        <h2>Movie not found.</h2>
                    </div>
                )
            }

            <div className="footer">
                <span>Made by <a href='https://www.supremekhadka.com.np' style={{textDecoration: "none", fontWeight: 400, color: "#fff"}}>Supreme</a></span>
            </div>

        </div>
    );
}

export default App;
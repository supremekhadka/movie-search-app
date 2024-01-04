import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return(
        <div className='movie'>
            <div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                </div>
                <div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                    <p>{movie.Year}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
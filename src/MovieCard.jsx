import React, { useState, useEffect } from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {

    const [ imgSrc, setImgSrc ] = useState();

    useEffect(() => {
        setImgSrc(movie.Poster);
    }, [movie.Poster])

    return(
        <div className='movie'>
            <div>
                <div>
                    <img 
                        src={imgSrc} 
                        onError={() => {
                            setImgSrc("https://via.placeholder.com/400");
                        }}
                        alt={movie.Title} />
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
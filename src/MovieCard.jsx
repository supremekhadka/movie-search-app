import React, { useEffect, useState } from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState();

    useEffect(() => {
        setImgSrc(movie.Poster);
    }, [movie.Poster]);

    return(
        <div className='movie'>
            <div>
                <div>
                    <img 
                        // src={((movie.Poster !== 'N/A') && (movie.Poster.Response !== '404'))? movie.Poster : "https://via.placeholder.com/400"} 
                        src={ imgSrc }
                        alt={movie.Title} 
                        onError={
                            ()=>{
                                setImgSrc("https://via.placeholder.com/400");
                            }
                        }
                    />
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
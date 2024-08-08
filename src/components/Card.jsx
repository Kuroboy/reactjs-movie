import React from 'react';
import './style/card.css';
import genreMap from '../types/App';

function Card({ movie }) {
    
    const genres = movie.genre_ids.map(genreId => genreMap[genreId] || "Unknown").join(', ');

    return (
        <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className="movie-card">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={`${movie.title} Poster`} 
                    className='img-fluid' 
                />
                <p>{genres}</p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

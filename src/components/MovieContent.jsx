import React from 'react';
import './style/movieContent.css';
import genreMap from '../types/App';
import Button from './Button';

function MovieContent({ movie }) {
  if (!movie) return null;

    const genres = movie.genre_ids.map(genreId => genreMap[genreId] || "Unknown").join(', ');
  
  const formattedRuntime = movie.runtime ? 
  `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : 'N/A';


  return (
    <div className={`content ${movie.active ? 'active' : ''}`}>
      <h1 className="movie-title">{movie.title}</h1>
      <h4>
        <span>{new Date(movie.release_date).getFullYear()}</span>
        <span><i>{movie.adult ? '18+' : 'PG'}</i></span>
        <span>{formattedRuntime}</span><br />
        <span>{genres}</span>
      </h4>
      <p>{movie.overview}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name='Book'
          bgcolor="#ff3700"
          color="#fff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name='Favorite'
        />
      </div>
    </div>
  );
}

export default MovieContent;

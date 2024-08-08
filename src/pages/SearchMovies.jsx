import React, { useEffect, useState } from 'react';
import './style/searchMovies.css';
import Search from '../components/Search';
import genreMap from '../types/App';

const API_KEY = process.env.REACT_APP_API_KEY;

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = (searchQuery) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <div className="search-movies">
      <Search onSearch={setQuery} />
      {query && (
        <div className="results-dropdown">
          {movies.map(movie => (
            <div key={movie.id} className="dropdown-item">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={`${movie.title} Poster`} 
              />
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.genre_ids.map(genreId => genreMap[genreId] || "Unknown").join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchMovies;

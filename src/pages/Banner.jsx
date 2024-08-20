import React, { useState, useEffect } from 'react';
import './style/banner.css';
import bgImg from '../images/movies/bg-transformer.jpg';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function Banner() {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);

  const fetchMovieDetails = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(details => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
          .then(res => res.json())
          .then(videos => {
            const trailer = videos.results.find(video => video.type === 'Trailer');
            return { ...details, trailerUrl: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null };
          });
      });
  };
  
  const fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const moviePromises = data.results.map(movie =>
          fetchMovieDetails(movie.id).then(details => ({ ...movie, ...details }))
        );
        Promise.all(moviePromises)
          .then(moviesWithDetails => {
            const moviesWithActiveFlag = moviesWithDetails.map((movie, index) => ({
              ...movie,
              active: index === 0,
            }));
            setMovies(moviesWithActiveFlag);
            setActiveMovie(moviesWithActiveFlag[0]);
          })
          .catch(e => console.log(e.message));
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = id => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if (movie.id === id) {
        movie.active = true;
        setActiveMovie(movie);
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div id='banner' className="banner">
      <div className="movie">
        <img
          src={activeMovie ? `https://image.tmdb.org/t/p/original${activeMovie.backdrop_path}` : bgImg}
          alt="Background Image"
          className="bgImg active"
        />
        <div className="container-fluid">
          <div className="row">
            <div className='col-lg-6 col-md-12'>
              <MovieContent movie={activeMovie} />
            </div>
            <div className='col-lg-6 col-md-12'>
              <MovieDate movie={activeMovie} />
              <PlayBtn movie={activeMovie} />
            </div>
          </div>
        </div>
      </div>
      {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
    </div>
  );
}

export default Banner;

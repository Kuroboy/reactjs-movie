import React, { useState, useEffect } from 'react';
import './style/schedule.css';
import Card from '../components/Card';
import genreMap from '../types/App';

const API_URL = process.env.REACT_APP_API_URL;

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = Object.values(genreMap); 
  const genreOptions = ['All', ...genres];

  const fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedGenre === 'All') {
      setMovies(data);
    } else {
      setMovies(data.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre))));
    }
  }, [data, selectedGenre]);

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
        <ul className="filters">
            {genreOptions.map(genre => {
              const genreKey = genre === 'All' ? 'All' : Object.keys(genreMap).find(key => genreMap[key] === genre);
              const isActive = selectedGenre === genreKey;

              return (
                <li
                  key={genre}
                  className={isActive ? 'active' : undefined}
                  onClick={() => setSelectedGenre(genreKey)}
                >
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row mt-5">
          {movies && movies.length > 0 && movies.map(movie => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
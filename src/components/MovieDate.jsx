import React from 'react';
import './style/movieDate.css';

function MovieDate({ movie }) {
  if (!movie) return null; // Jika tidak ada film aktif, jangan tampilkan apa-apa

  return (
    <div className="date active">
      <h2>On {new Date(movie.release_date).toLocaleDateString()}</h2>
    </div>
  );
}

export default MovieDate;

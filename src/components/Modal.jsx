import React from 'react';
import './style/modal.css';

function Modal({ movie, status, toggleModal }) {
  
  return (
    <div className={`movieModal ${status ? 'active' : ''}`}>
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      {movie.trailerUrl ? (
        <iframe 
          width="1280"
          height="720"
          src={movie.trailerUrl}
          title={`${movie.title} | Official Trailer`} 
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen    
        ></iframe>
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
}

export default Modal;

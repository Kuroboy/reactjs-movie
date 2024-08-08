import React from 'react';
import './style/trendCard.css';

const TrendCard = ({ slide }) => {
    return (
        <div className="trend-card">
            <img 
                src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} 
                alt={slide.title} 
                className="img-fluid" 
            />
            <a href="#">
                Add to favorite <ion-icon name="heart-outline"></ion-icon>
            </a>
        </div>
    );
};

export default TrendCard;
 
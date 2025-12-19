import React from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({ title }) => {
  return (
    <div className="title-cards">
      <h2>{title || "Popular on Diablo"}</h2>

      <div className="card-list">
        {cards_data.map((card) => (
          <Link
            to={`/player/${card.id}`}
            className="card"
            key={card.id}
          >
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

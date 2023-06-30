import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__like ${isLiked && 'elements__like_active'}`;

  function showCounter() {
    if (card.likes.length > 0) {
      const counter = card.likes.length;
      return counter;
    }
  }

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteCard() {
    onCardDelete(card);
  }

  return (
    <div className="elements__card">
      <img className="elements__image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <div className="elements__wrapper">
        <h2 className="elements__place-name">{card.name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Понравилось"
          ></button>
          <span className="elements__like-counter">{showCounter()}</span>
        </div>
      </div>
      {isOwn && (
        <button className="elements__bucket" type="button" aria-label="Удалить" onClick={handleDeleteCard}></button>
      )}
    </div>
  );
}

export { Card };

import React from 'react';

function ImagePopup({ selectedCard, onClose }) {
  const isOpened = Boolean(selectedCard.name);
  const cardName = String(selectedCard.name);

  return (
    <div className={`popup popup_type_galery ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__galery-container">
        <button className="popup__close-button" type="button" aria-label="Закрыть попап" onClick={onClose} />
        <img className="popup__image" src={selectedCard.link} alt={cardName} />
        <h2 className="popup__image-desription">{cardName}</h2>
      </div>
    </div>
  );
}

export { ImagePopup };

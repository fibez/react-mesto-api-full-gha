import { useContext } from 'react';
import { Card } from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { PopupProfileEdit } from './PopupProfileEdit';
import { PopupCardsAdd } from './PopupCardsAdd';
import { PopupEditAvatar } from './PopupEditAvatar';
import { ImagePopup } from './ImagePopup';
import { PopupRemoveCard } from './PopupRemoveCard';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__info-container">
            <button className="profile__avatar-button" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
            </button>
            <p className="profile__description">{currentUser.about}</p>
            <div className="profile__name-button-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать описание профиля"
                onClick={props.onEditProfile}
              />
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить фотографию"
            onClick={props.onAddPlace}
          />
        </section>
        <ul className="elements content__elements">
          {props.cards.map((card) => {
            return (
              <li key={card._id}>
                <Card
                  card={card}
                  onCardClick={props.onCardClick}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                />
              </li>
            );
          })}
        </ul>
      </main>
      <PopupProfileEdit
        isEditProfileOpened={props.isEditProfileOpen}
        onClose={props.onClose}
        onUpdateUser={props.handleUpdateUser}
      />
      <PopupCardsAdd
        isAddPlacePopupOpen={props.isAddPlacePopupOpen}
        onClose={props.onClose}
        onAddPlace={props.handleAddPlaceSubmit}
      />
      <PopupEditAvatar
        isEditAvatarPopupOpen={props.isEditAvatarPopupOpen}
        onClose={props.onClose}
        onUpdateAvatar={props.handleUpdateAvatar}
      />
      <PopupRemoveCard />
      <ImagePopup selectedCard={props.selectedCard} onClose={props.onClose} />
    </>
  );
}

export { Main };

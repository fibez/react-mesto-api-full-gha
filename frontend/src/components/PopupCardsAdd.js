import { PopupWithForm } from './PopupWithForm';
import { useRef, useEffect } from 'react';
import { Popup } from './Popup';

function PopupCardsAdd({ isAddPlacePopupOpen, onClose, onAddPlace }) {
  const newCardNameRef = useRef();
  const newCardLinkRef = useRef();

  useEffect(() => {
    if (!isAddPlacePopupOpen) {
      newCardNameRef.current.value = '';
      newCardLinkRef.current.value = '';
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: newCardNameRef.current.value,
      link: newCardLinkRef.current.value,
    });
  }

  return (
    <Popup isOpened={isAddPlacePopupOpen} onClose={onClose}>
      <PopupWithForm popupType="cards-add" name="Новое место" buttonText={'Создать'} onSubmit={handleSubmit}>
        <input
          className="popup__input popup__input_type_place-name"
          id="place-name"
          placeholder="Название"
          name="cards-input-place-name"
          defaultValue=""
          required=""
          minLength={2}
          maxLength={30}
          ref={newCardNameRef}
        />
        <span className="popup__error popup__error_type_add-card" id="place-name-error" />
        <input
          className="popup__input popup__input_type_img-link"
          id="img-link"
          placeholder="Ссылка на картинку"
          name="cards-input-img-link"
          defaultValue=""
          required=""
          type="url"
          ref={newCardLinkRef}
        />
        <span className="popup__error popup__error_type_img-link" id="img-link-error" />
      </PopupWithForm>
    </Popup>
  );
}

export { PopupCardsAdd };

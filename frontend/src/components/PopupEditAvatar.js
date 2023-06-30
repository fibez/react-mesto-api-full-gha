import { PopupWithForm } from './PopupWithForm';
import { useRef, useEffect } from 'react';
import { Popup } from './Popup';

function PopupEditAvatar({ isEditAvatarPopupOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef();

  useEffect(() => {
    if (!isEditAvatarPopupOpen) {
      avatarInputRef.current.value = '';
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(avatarInputRef.current.value);
  }

  return (
    <Popup isOpened={isEditAvatarPopupOpen} onClose={onClose}>
      <PopupWithForm popupType="edit-avatar" name="Обновить аватар" buttonText={'Сохранить'} onSubmit={handleSubmit}>
        <input
          className="popup__input popup__input_type_avatar-link"
          id="avatar-link"
          placeholder="Ссылка на аватар"
          name="cards-input-avatar-link"
          defaultValue=""
          required=""
          type="url"
          ref={avatarInputRef}
        />
        <span className="popup__error popup__error_type_avatar-link" id="avatar-link-error" />
      </PopupWithForm>
    </Popup>
  );
}

export { PopupEditAvatar };

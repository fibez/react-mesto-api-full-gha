import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { PopupWithForm } from './PopupWithForm';
import { Popup } from './Popup';

function PopupProfileEdit({ isEditProfileOpened, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isEditProfileOpened) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
    return;
  }, [isEditProfileOpened, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: name,
      about: description,
    };

    onUpdateUser(userData);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <Popup isOpened={isEditProfileOpened} onClose={onClose}>
      <PopupWithForm
        popupType="profile-edit"
        name="Редактировать профиль"
        buttonText={'Сохранить'}
        onSubmit={handleSubmit}
      >
        <input
          className={`popup__input popup__input_type_name`}
          id="profile-name"
          placeholder="Как вас зовут?"
          name="profile-input-name"
          value={name}
          required=""
          minLength={2}
          maxLength={40}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="profile-name-error" />
        <input
          className="popup__input popup__input_type_profession"
          id="profile-profession"
          placeholder="Кто вы?"
          name="profile-input-profession"
          value={description}
          required=""
          minLength={2}
          maxLength={200}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="profile-profession-error" />
      </PopupWithForm>
    </Popup>
  );
}

export { PopupProfileEdit };

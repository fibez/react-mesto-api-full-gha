import { PopupWithForm } from './PopupWithForm';
import { Popup } from './Popup';

function PopupRemoveCard({ isOpened, onClose }) {
  return (
    <Popup isOpened={isOpened} onClose={onClose}>
      <PopupWithForm popupType="remove-card" name="Вы уверены?" buttonText={'Да'} />
    </Popup>
  );
}

export { PopupRemoveCard };

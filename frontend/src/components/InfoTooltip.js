import { Popup } from './Popup';
import loginerr from '../images/loginerr.png';
import loginsucces from '../images/loginsucces.png';

function InfoTooltip(props) {
  const selectedText = props.error ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!';
  const selectedImage = props.error ? loginerr : loginsucces;

  return (
    <Popup isOpened={props.isOpened} onClose={props.onClose}>
      <div className="popup__tooltip-container">
        <img className="popup__tooltip-img" src={selectedImage} />
        <span className="popup__tooltip-description">{selectedText}</span>
      </div>
    </Popup>
  );
}

export { InfoTooltip };

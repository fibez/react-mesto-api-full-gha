function Popup({ isOpened, onClose, children }) {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть попап" onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

export { Popup };

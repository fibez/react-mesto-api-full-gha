function PopupWithForm({ popupType, name, onSubmit, buttonText, children }) {
  return (
    <form className={`popup__form popup__form_type_${popupType}`} name={name} onSubmit={onSubmit}>
      <p className="popup__description">{name}</p>
      {children}
      <button className="popup__save-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export { PopupWithForm };

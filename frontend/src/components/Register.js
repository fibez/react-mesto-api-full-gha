import { Registered } from './Registered';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth.js';
import { InfoTooltip } from './InfoTooltip';

function Register(props) {
  const [registrationError, setRegistrationError] = useState(false);
  const [formValue, setFormValue] = useState({
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, email } = formValue;
    auth
      .register(password, email)
      .then(() => {
        props.handleInfoTooltipOpen();
        setTimeout(() => {
          navigate('/sign-in', { replace: true });
        }, 1000);
        setRegistrationError(false);
      })
      .catch(() => {
        props.handleInfoTooltipOpen();
        setRegistrationError(true);
      });
  };

  return (
    <>
      <form className="enterance-form" onSubmit={handleSubmit} name={'sign-up'}>
        <h1 className="enterance-form__title">Регистрация</h1>
        <input
          className="enterance-form__input"
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          className="enterance-form__input"
          placeholder="Пароль"
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <button className="enterance-form__submit-button" type="submit" onSubmit={handleSubmit}>
          Зарегистрироваться
        </button>
      </form>
      <Registered />
      <InfoTooltip isOpened={props.isInfoToooltipOpen} error={registrationError} onClose={props.onClose} />
    </>
  );
}

export { Register };

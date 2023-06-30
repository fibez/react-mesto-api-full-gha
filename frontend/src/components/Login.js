import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth.js';
import { InfoTooltip } from './InfoTooltip.js';

function Login(props) {
  const [loginError, setLoginError] = useState(false);
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

  function handleSubmit(e) {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          props.onLogin(true);
          navigate('/', { replace: true });

          return data;
        }
      })
      .catch(() => {
        props.handleInfoTooltipOpen();
        setLoginError(true);
      });
  }

  return (
    <>
      <form className="enterance-form" name={'sign-in'} onSubmit={handleSubmit}>
        <h1 className="enterance-form__title">Вход</h1>
        <input
          className="enterance-form__input"
          placeholder="Email"
          required
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          className="enterance-form__input"
          placeholder="Пароль"
          required
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <button className="enterance-form__submit-button" type="submit">
          Войти
        </button>
      </form>
      <InfoTooltip isOpened={props.isInfoToooltipOpen} error={loginError} onClose={props.onClose} />
    </>
  );
}

export { Login };

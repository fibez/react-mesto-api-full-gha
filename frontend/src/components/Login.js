import React, { useState } from 'react';
import Cookies from 'js-cookie';
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
        if (data.jwt) {
          Cookies.set('jwt', data.jwt);
          const token = Cookies.get('jwt');
          auth.checkToken(token).then((res) => {
            if (res) {
              props.onLogin(true);
              navigate('/', { replace: true });
              // return res;
            }
          })
        }
      })
      .catch(() => {
        props.handleInfoTooltipOpen();
        setLoginError(true);
      });
  }

  // useEffect(() => {
  //   if (Cookies.get('jwt')) {
  //     const token = Cookies.get('jwt');

  //     auth.checkToken(token).then((res) => {
  //       if (res) {
  //         setUserEmail(res.email);
  //         setLoggedIn(true);
  //         navigate('/', { replace: true });
  //       }
  //     });
  //   }
  // }, []);

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

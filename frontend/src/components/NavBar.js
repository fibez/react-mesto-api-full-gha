import { Route, Routes, NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="header__navigation-container">
            <span className="header__email">{props.userEmail}</span>
            <NavLink className="navlink navlink_header" to="/sign-in" onClick={props.onLogout}>
              Выйти
            </NavLink>
          </div>
        }
      />
      <Route
        path="/sign-in"
        element={
          <NavLink className="navlink navlink_header" to="/sign-up">
            Зарегистрироваться
          </NavLink>
        }
      />
      <Route
        path="/sign-up"
        element={
          <NavLink className="navlink navlink_header" to="/sign-in">
            Войти
          </NavLink>
        }
      />
    </Routes>
  );
}

export { NavBar };

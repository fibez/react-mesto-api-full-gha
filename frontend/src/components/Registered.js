import { Link } from 'react-router-dom';

function Registered() {
  return (
    <button className="registered">
      <Link to="/sign-in" className="navlink">
        Уже зарегистрированы? Войти
      </Link>
    </button>
  );
}

export { Registered };

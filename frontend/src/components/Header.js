import logo from '../images/logo.svg';
import { NavBar } from './NavBar';

function Header(props) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип портала" />
      <NavBar userEmail={props.userEmail} onLogout={props.onLogout} />
    </header>
  );
}

export { Header };

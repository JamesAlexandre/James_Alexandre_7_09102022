import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../style/Header.css"

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo kasa" />
      <nav>
        <ul>
          <NavLink to="/" end className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

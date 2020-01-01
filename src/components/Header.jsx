import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/header.scss";
import logo from "../assets/static/logo-platzi.png";
import user from "../assets/static/user.png";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="asd" />
    </Link>

    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={user} alt="asdsad" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to="/profile">Cuenta</Link>
        </li>
        <li>
          <Link to="/logout">Cerrar Sesion</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;

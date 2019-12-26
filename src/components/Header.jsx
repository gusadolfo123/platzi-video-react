import React from "react";
import "../assets/styles/components/header.scss";
import logo from "../assets/static/logo-platzi.png";
import user from "../assets/static/user.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="asd" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={user} alt="asdsad" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesion</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;

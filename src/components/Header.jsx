import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/header.scss";
import { connect } from "react-redux";
import logo from "../assets/static/logo-platzi.png";
import userIcon from "../assets/static/user.png";
import gravatar from "../utils/gravatar";
import { LogoutRequest } from "../actions/index";

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.LogoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="asd" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <Link to="/profile">{user.name}</Link>
              </li>
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Cerrar Sesion
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDistpatchToProps = {
  LogoutRequest
};

// export default Header;
export default connect(mapStateToProps, mapDistpatchToProps)(Header);

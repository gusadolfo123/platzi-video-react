import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/static/google-icon.png";
import TwitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/login.scss";

const Login = () => {
  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar Sesion</h2>
        <form className="login__container--form">
          <input type="text" className="input" placeholder="Correo" />
          <input
            type="password"
            autoComplete="false"
            className="input"
            placeholder="Contraseña"
          />
          <button type="button" className="button">
            Iniciar Session
          </button>
          <div className="login__container--remember-me">
            <label htmlFor="box1">
              <input type="checkbox" id="box1" value="Checkbox" />
              Recuerdame
            </label>
            <Link to="/recovery">Olvide Contraseña</Link>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={GoogleIcon} alt="logo google" />
            Inicia Session con Google
          </div>
          <div>
            <img src={TwitterIcon} alt="logo twiiter" />
            Inicia Session con Twitter
          </div>
        </section>
        <p className="login_container--register">
          No tienes ninguna cuenta?
          <Link to="/register">Registrate</Link>
        </p>
      </section>
    </section>
  );
};

export default Login;

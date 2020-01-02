import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/static/google-icon.png";
import TwitterIcon from "../assets/static/twitter-icon.png";
import { LoginRequest } from "../actions/index";
import "../assets/styles/components/login.scss";

const Login = props => {
  const [form, setValues] = useState({
    email: ""
  });

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.LoginRequest(form);
    props.history.push("/");
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar Sesion</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            autoComplete="false"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button type="submit" className="button">
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

const mapDistpatchToProps = {
  LoginRequest
};

// export default Login;
export default connect(null, mapDistpatchToProps)(Login);

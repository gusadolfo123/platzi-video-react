import React, { useState } from "react";
import "../assets/styles/components/register.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterRequest } from "../actions/index";

const Register = props => {
  const [form, setValues] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = e => {
    e.preventDefault();
    props.RegisterRequest(form);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Registrarse</h2>
        <form className="register__container--form" onSubmit={handleRegister}>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            type="email"
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
            Registrarse
          </button>
        </form>
        <p className="register__container--login">
          <Link to="/login">Iniciar Sesion</Link>
        </p>
      </section>
    </section>
  );
};

const mapDistpatchToProps = {
  RegisterRequest
};

// export default Register;
export default connect(null, mapDistpatchToProps)(Register);

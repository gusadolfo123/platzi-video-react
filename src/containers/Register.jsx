import React from "react";
import "../assets/styles/components/register.scss";

const Register = () => {
  return (
    <section className="register">
      <section className="register__container">
        <h2>Registrarse</h2>
        <form className="register__container--form">
          <input type="text" className="input" placeholder="Nombre" />
          <input type="email" className="input" placeholder="Correo" />
          <input
            type="password"
            autoComplete="false"
            className="input"
            placeholder="Contraseña"
          />
          <button type="button" className="button">
            Registrarse
          </button>
        </form>
        <p className="register__container--login">
          <a href="/login">Iniciar Sesion</a>
        </p>
      </section>
    </section>
  );
};

export default Register;

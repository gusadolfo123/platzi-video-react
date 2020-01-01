import React from "react";
import Error from "../assets/static/404.png";
import "../assets/styles/components/notfound.scss";

const NotFound = () => {
  return (
    <section className="error">
      <section className="error__container">
        <h1 className="error_container__title">Page Not Found</h1>
        <img src={Error} alt="error 404" className="error__container--img" />
        <p className="error_container__detail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aceius.
          <a href="/">Go Home</a>
        </p>
      </section>
    </section>
  );
};

export default NotFound;

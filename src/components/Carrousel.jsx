import React from "react";
import "../assets/styles/components/carrousel.scss";

const Carrousel = ({ children }) => (
  <section className="carrousel">
    <div className="carrousel__container">{children}</div>
  </section>
);

export default Carrousel;

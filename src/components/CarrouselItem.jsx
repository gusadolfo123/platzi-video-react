import React from "react";
import "../assets/styles/components/carrouselItem.scss";
import playButton from "../assets/static/play.png";
import plusButton from "../assets/static/plus.png";

const CarrouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carrousel-item">
    <img className="carrousel-item__img" src={cover} alt={title} />
    <div className="carrousel-item__details">
      <div>
        <img src={playButton} alt="Play" />
        <img src={plusButton} alt="Plus" />
      </div>
      <p className="carrousel-item__details--title">{title}</p>
      <p className="carrousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarrouselItem;

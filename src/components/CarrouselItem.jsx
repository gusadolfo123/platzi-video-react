import React from "react";
import "../assets/styles/components/carrouselItem.scss";
import playButton from "../assets/static/play.png";
import plusButton from "../assets/static/plus.png";

const CarrouselItem = () => (
  <div className="carrousel-item">
    <img
      className="carrousel-item__img"
      src="https://images.pexels.com/photos/2832078/pexels-photo-2832078.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="people"
    />
    <div className="carrousel-item__details">
      <div>
        <img src={playButton} alt="Play" />
        <img src={plusButton} alt="Plus" />
      </div>
      <p className="carrousel-item__details--title">Titulo descriptivo</p>
      <p className="carrousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarrouselItem;

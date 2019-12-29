import React from "react";
import PropTypes from "prop-types";
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

CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

export default CarrouselItem;

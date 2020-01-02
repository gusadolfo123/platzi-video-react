import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/carrouselItem.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import playButton from "../assets/static/play.png";
import plusButton from "../assets/static/plus.png";
import removeIcon from "../assets/static/delete.png";
import { setFavorite, deleteFavorite } from "../actions/index";

const CarrouselItem = props => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };

  const handleDeleteFavorite = id => {
    props.deleteFavorite({ id });
  };

  return (
    <div className="carrousel-item">
      <img className="carrousel-item__img" src={cover} alt={title} />
      <div className="carrousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carrousel-item__details--img"
              src={playButton}
              alt="Play"
            />
          </Link>
          {isList ? (
            <img
              className="carrousel-item__details--img"
              src={removeIcon}
              alt="Remove"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carrousel-item__details--img"
              src={plusButton}
              alt="Plus"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carrousel-item__details--title">{title}</p>
        <p className="carrousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarrouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

const mapDistpatchToProps = {
  setFavorite,
  deleteFavorite
};

// export default CarrouselItem;
export default connect(null, mapDistpatchToProps)(CarrouselItem);

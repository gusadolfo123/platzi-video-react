import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetVideoSource } from "../actions/index";
import "../assets/styles/components/player.scss";
import NotFound from "./NotFound";

const Player = props => {
  const { id } = props.match.params;
  const [loading, changeLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.GetVideoSource(id);
    changeLoading(false);
  }, []);

  return loading ? (
    <h1>Cargando...</h1>
  ) : hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDistpatchToProps = {
  GetVideoSource
};

// export default Player;
export default connect(mapStateToProps, mapDistpatchToProps)(Player);

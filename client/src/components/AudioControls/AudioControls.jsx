import React from "react";
import "./AudioControls.scss";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="home-page-buttons alarm-btn"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <span className="home-page-buttons__icon-wrap">
          <img src={Pause} alt="" />
        </span>
        <p>Activate HELP! Alarm</p>
      </button>
    ) : (
      <button
        type="button"
        className="home-page-buttons alarm-btn"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <span className="home-page-buttons__icon-wrap">
          <img src={Play} alt="" />
        </span>
        <p>Activate HELP! Alarm</p>
      </button>
    )}
  </div>
);

export default AudioControls;

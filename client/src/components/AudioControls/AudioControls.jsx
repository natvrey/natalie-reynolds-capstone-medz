import React from "react";
import "./AudioControls.scss";
import Speaker from "../../assets/images/megaphone.svg";

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="home-page-buttons alarm-btn"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <span className="home-page-buttons__icon-wrap alarm-btn-audio-icon">
          <img src={Speaker} alt="" />
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
        <span className="home-page-buttons__icon-wrap alarm-btn-audio-icon">
          <img src={Speaker} alt="" />
        </span>
        <p>Activate HELP! Alarm</p>
      </button>
    )}
  </div>
);

export default AudioControls;

import React from "react";
import "./AudioControls.scss";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";
import buttonIcon from "../../assets/images/megaphone.svg";

// Hey Dev, I got inspiration from this source code:
// https://codesandbox.io/s/react-audio-player-demo-zwhoc?file=/src/AudioPlayer.jsx:351-360

const AudioControls = ({ isPlaying, onPlayPauseClick }) => (
  <div className="audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="home-page-buttons alarm-btn"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <section className="icon-btn-container">
          <img className="btn-icon" src={buttonIcon} alt="alarm icon" />
          <img className="play-btn" src={Pause} alt="pause icon" />
        </section>
        <p>Activate HELP! alarm</p>
      </button>
    ) : (
      <button
        type="button"
        className="home-page-buttons alarm-btn"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <section className="icon-btn-container">
          <img className="btn-icon" src={buttonIcon} alt="alarm icon" />
          <img className="play-btn" src={Play} alt="play icon" />
        </section>
        <p>Activate HELP! alarm</p>
      </button>
    )}
  </div>
);

export default AudioControls;

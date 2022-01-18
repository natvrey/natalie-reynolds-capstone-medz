import React from "react";
// import { ReactComponent as Play } from "./assets/play.svg";
// import { ReactComponent as Pause } from "./assets/pause.svg";
// import { ReactComponent as Next } from "../../images/next.svg";
// import { ReactComponent as Prev } from "../../images/prev.svg";

import Next from "../../assets/images/next.svg";
import Prev from "../../assets/images/prev.svg";
import Play from "../../assets/images/play.svg";
import Pause from "../../assets/images/pause.svg";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      {/* <Prev /> */}
      <img className="prev-btn" src={Prev} alt="previous track icon" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        {/* <Pause /> */}
        <img className="pause-btn" src={Pause} alt="pause icon" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        {/* <Play /> */}
        <img className="play-btn" src={Play} alt="play icon" />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      {/* <Next /> */}
      <img className="next-btn" src={Next} alt="next track icon" />
    </button>
  </div>
);

export default AudioControls;

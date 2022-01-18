import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

import alarmSound from "../../assets/sounds/alarm-audio.mp3";
import buttonIcon from "../../assets/images/megaphone.svg";

// import Play from "../../assets/images/play.svg";
// import Pause from "../../assets/images/pause.svg";

// import { ReactComponent as Play } from "../../images/play.svg";
// import { ReactComponent as Pause } from "../../images/pause.svg";
// import { ReactComponent as Next } from "../../images/next.svg";
// import { ReactComponent as Prev } from "../../images/prev.svg";

const AudioPlayer = ({ tracks }) => {
  // State
  // const [trackIndex, setTrackIndex] = useState(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  const [trackIndex, setTrackIndex] = useState("");
  const [trackProgress, setTrackProgress] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  // const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(alarmSound));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(alarmSound);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={buttonIcon}
          alt={`track artwork for Natalie by Natalie`}
        />
        <h2 className="title">Natalie</h2>
        <h3 className="artist">Natalie</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
      {/* <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      /> */}
    </div>
  );
};

export default AudioPlayer;

// const AudioControls = ({ isPlaying, onPlayPauseClick }) => (

//   <div className="audio-controls">
//     {/* <button
//       type="button"
//       className="prev"
//       aria-label="Previous"
//       onClick={onPrevClick}
//     >
//       <Prev />
//     </button> */}
//     {isPlaying ? (
//       <button
//         type="button"
//         className="pause"
//         onClick={() => onPlayPauseClick(false)}
//         aria-label="Pause"
//       >
//         {/* <Pause /> */}
//         <img className="pause-btn" src={Pause} alt="pause icon" />
//       </button>
//     ) : (
//       <button
//         type="button"
//         className="play"
//         onClick={() => onPlayPauseClick(true)}
//         aria-label="Play"
//       >
//         {/* <Play /> */}
//         <img className="play-btn" src={Play} alt="play icon" />
//       </button>
//     )}
//     {/* <button
//       type="button"
//       className="next"
//       aria-label="Next"
//       onClick={onNextClick}
//     >
//       <Next />
//     </button> */}
//   </div>
// );

// export default AudioControls;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./AlarmBtn.scss";
// import buttonIcon from "../../assets/images/megaphone.svg";
// import useSound from "use-sound";
// // import alarmSound from "../../assets/sounds/alarm-audio.mp3";

// const AlarmBtn = () => {
//   const alarmSound = "../../assets/sounds/alarm-audio.mp3";
//   const [play, { stop, isPlaying }] = useSound(alarmSound);
//   // const [play, exposedData] = useSound(alarmSound);
//   return (
//     <Link className="link-tags" to="/">
//       <button
//         className="home-page-buttons alarm-btn"
//         type="submit"
//         onClick={play}
//         active={isPlaying}
//         // play={play}
//         stop={stop}
//       >
//         <img className="alarm-btn__icon" src={buttonIcon} alt="alarm icon" />
//         <p>Activate HELP! alarm</p>
//       </button>
//     </Link>
//   );
// };

// export default AlarmBtn;

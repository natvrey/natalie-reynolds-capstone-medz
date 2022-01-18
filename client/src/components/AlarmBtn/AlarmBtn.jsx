import React, { useState, useEffect, useRef } from "react";
import AudioControls from "../AudioControls/AudioControls";
import alarmSound from "../../assets/sounds/alarm-audio.mp3";

const AudioPlayer = () => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(alarmSound));
  const intervalRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
    </div>
  );
};

export default AudioPlayer;

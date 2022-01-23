import React from "react";
import { Link } from "react-router-dom";
import "./Call911Btn.scss";
import buttonIcon from "../../assets/images/ambulance.svg";

const Call911Btn = () => {
  const handleClick = () => {
    window.open("http://localhost:3002/voice");
  };
  return (
    <button
      className="home-page-buttons call-911-btn"
      type="submit"
      onClick={handleClick}
    >
      <img
        className="call-911-btn__icon"
        src={buttonIcon}
        alt="call ambulance icon"
      />
      <p>Call 911</p>
    </button>
  );
};

export default Call911Btn;

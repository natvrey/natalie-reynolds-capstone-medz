import React from "react";
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
      <span className="home-page-buttons__icon-wrap">
        <img src={buttonIcon} alt="" />
      </span>
      <p>Call 911</p>
    </button>
  );
};

export default Call911Btn;

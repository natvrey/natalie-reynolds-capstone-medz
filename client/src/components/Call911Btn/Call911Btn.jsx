import React from "react";
import "./Call911Btn.scss";
import buttonIcon from "../../assets/images/ambulance.svg";

const APP_URL =
  process.env.REACT_APP_APP_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

const Call911Btn = () => {
  const handleClick = () => {
    const url = APP_URL.replace(/\/$/, "") + "/voice";
    window.open(url);
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

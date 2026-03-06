import React from "react";
import "./CallEmergContactBtn.scss";
import buttonIcon from "../../assets/images/phone.png";

const APP_URL =
  process.env.REACT_APP_APP_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

const CallEmergContactBtn = () => {
  const handleClick = () => {
    const url = APP_URL.replace(/\/$/, "") + "/voice";
    window.open(url);
  };

  return (
    <button
      className="home-page-buttons emerg-contact--btn"
      type="submit"
      onClick={handleClick}
    >
      <span className="home-page-buttons__icon-wrap">
        <img src={buttonIcon} alt="" />
      </span>
      <p>Call Emergency Contact</p>
    </button>
  );
};

export default CallEmergContactBtn;

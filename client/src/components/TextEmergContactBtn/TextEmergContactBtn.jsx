import React from "react";
import "./TextEmergContactBtn.scss";
import buttonIcon from "../../assets/images/communication.png";

const SMS_URL = process.env.REACT_APP_SMS_URL || "http://localhost:3000";

const TextEmergContactBtn = () => {
  const handleClick = () => {
    const url = SMS_URL.replace(/\/$/, "") + "/index.html";
    window.open(url);
  };

  return (
    <button
      className="home-page-buttons text-message-btn"
      type="button"
      onClick={handleClick}
    >
      <img
        className="text-message-btn__icon"
        src={buttonIcon}
        alt="text message icon"
      />
      <p>Text Emergency Contact</p>
    </button>
  );
};

export default TextEmergContactBtn;

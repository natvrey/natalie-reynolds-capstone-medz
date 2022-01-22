import React from "react";
import "./TextEmergContactBtn.scss";
import buttonIcon from "../../assets/images/communication.png";

const TextEmergContactBtn = () => {
  const handleClick = () => {
    window.open("http://localhost:3000/index.html");
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

import React from "react";
import "./CallEmergContactBtn.scss";
import buttonIcon from "../../assets/images/phone.png";

const CallEmergContactBtn = () => {
  const handleClick = () => {
    window.open("http://localhost:3002/voice");
  };

  return (
    <button
      className="home-page-buttons emerg-contact--btn"
      type="submit"
      onClick={handleClick}
    >
      <img
        className="emerg-contact-btn__icon"
        src={buttonIcon}
        alt="call emergency contact icon"
      />
      <p> Call Emergency Contact</p>
    </button>
  );
};

export default CallEmergContactBtn;

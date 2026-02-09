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
      <span className="home-page-buttons__icon-wrap">
        <img src={buttonIcon} alt="" />
      </span>
      <p>Call Emergency Contact</p>
    </button>
  );
};

export default CallEmergContactBtn;

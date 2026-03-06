import React from "react";
import { useNavigate } from "react-router-dom";
import "./TextEmergContactBtn.scss";
import buttonIcon from "../../assets/images/communication.png";

const TextEmergContactBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sms");
  };

  return (
    <button
      className="home-page-buttons text-message-btn"
      type="button"
      onClick={handleClick}
    >
      <span className="home-page-buttons__icon-wrap">
        <img src={buttonIcon} alt="" />
      </span>
      <p>Text Emergency Contact</p>
    </button>
  );
};

export default TextEmergContactBtn;

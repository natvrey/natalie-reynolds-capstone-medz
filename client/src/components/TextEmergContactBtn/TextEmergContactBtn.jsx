import React from "react";
import { Link } from "react-router-dom";
import "./TextEmergContactBtn.scss";
import buttonIcon from "../../assets/images/communication.png";

const TextEmergContactBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="home-page-buttons text-message-btn" type="submit">
        <img
          className="text-message-btn__icon"
          src={buttonIcon}
          alt="text message icon"
        />
        <p>Text Emergency Contact</p>
      </button>
    </Link>
  );
};

export default TextEmergContactBtn;

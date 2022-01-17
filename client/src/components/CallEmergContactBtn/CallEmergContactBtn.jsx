import React from "react";
import { Link } from "react-router-dom";
import "./CallEmergContactBtn.scss";
import buttonIcon from "../../assets/images/phone.png";

const CallEmergContactBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="emerg-contact--btn" type="submit">
        <img
          className="emerg-contact-btn__icon"
          src={buttonIcon}
          alt="call emergency contact icon"
        />
        <p> Call Emergency Contact</p>
      </button>
    </Link>
  );
};

export default CallEmergContactBtn;

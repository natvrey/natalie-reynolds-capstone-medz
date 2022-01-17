import React from "react";
import { Link } from "react-router-dom";
import "./Call911Btn.scss";
import buttonIcon from "../../assets/images/ambulance.svg";

const Call911Btn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="call-911-btn" type="submit">
        <img
          className="call-911-btn__icon"
          src={buttonIcon}
          alt="call ambulance icon"
        />
        <p>Call 911</p>
      </button>
    </Link>
  );
};

export default Call911Btn;

import React from "react";
import { Link } from "react-router-dom";
import "./AlarmBtn.scss";
import buttonIcon from "../../assets/images/megaphone.svg";

const AlarmBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="home-page-buttons alarm-btn" type="submit">
        <img className="alarm-btn__icon" src={buttonIcon} alt="alarm icon" />
        <p>Activate HELP! alarm</p>
      </button>
    </Link>
  );
};

export default AlarmBtn;

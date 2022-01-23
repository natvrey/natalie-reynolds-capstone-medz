import React from "react";
import { Link } from "react-router-dom";
import "./AppInfoBtn.scss";
import buttonIcon from "../../assets/images/question_circle.svg";

const AppInfoBtn = () => {
  return (
    <Link to="/instructions">
      <button className="home-page-buttons app-info-btn" type="button">
        <img
          className="app-info-btn__icon"
          src={buttonIcon}
          alt="app instructions icon"
        />
        <p> How to use this App</p>
      </button>
    </Link>
  );
};

export default AppInfoBtn;

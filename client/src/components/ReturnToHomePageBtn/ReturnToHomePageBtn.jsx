import React from "react";
import { Link } from "react-router-dom";
import "./ReturnToHomePageBtn.scss";
import buttonIcon from "../../assets/images/curve-arrow-left.svg";

const ReturnToHomePageBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="return-page-buttons app-info-btn" type="submit">
        <img
          className="app-info-btn__icon"
          src={buttonIcon}
          alt="app instructions icon"
        />
        <p>Go Back to Home Page</p>
      </button>
    </Link>
  );
};

export default ReturnToHomePageBtn;

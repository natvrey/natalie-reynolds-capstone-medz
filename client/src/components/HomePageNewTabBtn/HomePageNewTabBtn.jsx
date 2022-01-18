import React from "react";
import { Link } from "react-router-dom";
import "./HomePageNewTabBtn.scss";
import buttonIcon from "../../assets/images/curve-arrow-right.svg";

const ReturnToHomePageBtn = () => {
  return (
    <Link className="link-tags" to="/" target="_blank">
      <button className="return-page-buttons app-info-btn" type="submit">
        <img
          className="app-info-btn__icon"
          src={buttonIcon}
          alt="app instructions icon"
        />
        <p>
          Open Home Page <br></br> in new Tab
        </p>
      </button>
    </Link>
  );
};

export default ReturnToHomePageBtn;

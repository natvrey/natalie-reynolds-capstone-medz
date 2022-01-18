import React from "react";
import { Link } from "react-router-dom";
import "./FirstAidBtn.scss";
import buttonIcon from "../../assets/images/health.svg";

const FirstAidBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="home-page-buttons first-aid-btn" type="submit">
        <img
          className="first-aid-btn__icon"
          src={buttonIcon}
          alt="first aid instructions icon"
        />
        <p>First Aid Instructions</p>
      </button>
    </Link>
  );
};

export default FirstAidBtn;

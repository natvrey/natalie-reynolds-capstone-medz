import React from "react";
import { Link } from "react-router-dom";
import "./ViewProfilesBtn.scss";
import buttonIcon from "../../assets/images/magnifying_glass.png";

const ViewProfilesBtn = () => {
  return (
    <Link className="link-tags" to="/">
      <button className="home-page-buttons view-profiles-btn" type="submit">
        <img
          className="view-profiles-btn__icon"
          src={buttonIcon}
          alt="view profiles icon"
        />
        <p>View All Profiles</p>
      </button>
    </Link>
  );
};

export default ViewProfilesBtn;

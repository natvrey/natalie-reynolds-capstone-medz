import React from "react";
import { Link } from "react-router-dom";
import "./CreateProfileBtn.scss";
import buttonIcon from "../../assets/images/health_worker_form.svg";

const CreateProfileBtn = () => {
  return (
    <Link to="/profiles/create">
      <button className="home-page-buttons create-profile-btn" type="submit">
        <img
          className="create-profile-btn__icon"
          src={buttonIcon}
          alt="create profile icon"
        />
        <p>Create a Profile</p>
      </button>
    </Link>
  );
};

export default CreateProfileBtn;

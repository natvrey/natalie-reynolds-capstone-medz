import React from "react";
import "./SingleProfileBtn.scss";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "";
const SingleProfileBtn = (props) => {
  const { firstName, photo, id } = props.profile;
  const profileId = id;
  const isUploadedPhoto = photo && photo !== "/images/avatar-placeholder-medz.png";
  const photoSrc = isUploadedPhoto ? `${API_URL}${photo}` : (photo || "/images/avatar-placeholder-medz.png");

  return (
    <Link to={`/profiles/${profileId}`} className="single-profile-card">
      <img
        className="single-profile-card__avatar"
        src={photoSrc}
        alt={firstName}
      />
      <span className="single-profile-card__name">{firstName}</span>      
    </Link>
  );
};

export default SingleProfileBtn;

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
      <svg
        className="single-profile-card__arrow"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    </Link>
  );
};

export default SingleProfileBtn;

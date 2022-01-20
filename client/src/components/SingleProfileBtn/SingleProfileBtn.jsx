import React from "react";
import "./SingleProfileBtn.scss";
import { Link } from "react-router-dom";

const SingleProfileBtn = (props) => {
  const { firstName, photo, id } = props.profile;
  return (
    <Link className="link-tags" to={`/profiles/${id}`}>
      <button type="button" className="home-page-buttons">
        <img
          className="aside__image"
          src={photo}
          alt="user's profile picture"
        />
        <h3 className="aside__video-title">{firstName}</h3>
      </button>
    </Link>
  );
};

export default SingleProfileBtn;

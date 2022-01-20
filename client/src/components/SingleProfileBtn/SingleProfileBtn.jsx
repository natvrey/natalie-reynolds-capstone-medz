import React from "react";
import "./SingleProfileBtn.scss";
import { Link } from "react-router-dom";

const SingleProfileBtn = (props) => {
  const { firstName, photo, id } = props.profile;

  let profileId = id;
  // console.log(id);
  return (
    <Link className="link-tags" to={`/profiles/${profileId}`}>
      <button type="button" className="home-page-buttons">
        <img className="avatar" src={photo} alt="user's profile picture" />
        <h3 className="aside__video-title">{firstName}</h3>
      </button>
    </Link>
  );
};

export default SingleProfileBtn;

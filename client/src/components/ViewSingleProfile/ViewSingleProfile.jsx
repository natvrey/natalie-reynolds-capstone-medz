import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ViewSingleProfile.scss";
const API_URL = process.env.REACT_APP_API_URL;

const ViewSingleProfile = (props) => {
  const [profile, setProfile] = useState("");
  const profileId = props.match.params.profileId;

  useEffect(() => {
    fetchProfileDetail();
  }, []);

  document.title = `${profile.firstName}'s Profile`;

  const handleSubmitDeleteBtn = () => {
    axios
      .delete(API_URL + "/profiles/" + profileId)
      .then((result) => {
        alert("Profile deleted!");

        return (window.location.href = "/profiles");
      })
      .catch((error) => console.log(error));
  };

  let fetchProfileDetail = () => {
    axios
      .get(`${API_URL}/profiles/${profileId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <article className="single-profile">
      <section className="single-profile__text-container">
        <h1 className="create-profile__heading">
          {profile.firstName}'s Profile
        </h1>
        <article className="single-profile__container">
          <section className="single-profile__textbox-one">
            <div>
              <p className="single-profile__title"> Profile photo: </p>
              <img className="avatar" src={profile.photo} alt="user" />
            </div>

            <div>
              <p className="single-profile__title">First name:</p>
              <p className="single-profile__text">{profile.firstName}</p>
            </div>
            <div>
              <p className="single-profile__title"> Middle name:</p>
              <p className="single-profile__text">{profile.middleName}</p>
            </div>
            <div>
              <p className="single-profile__title"> Last name: </p>
              <p className="single-profile__text">{profile.lastName}</p>
            </div>
            <div>
              <p className="single-profile__title"> Gender:</p>
              <p className="single-profile__text">{profile.gender}</p>
            </div>
            <div>
              <p className="single-profile__title"> Date of Birth:</p>
              <p className="single-profile__text">{profile.birthday}</p>
            </div>
            <div>
              <p className="single-profile__title">Blood Type:</p>
              <p className="single-profile__text">{profile.bloodType}</p>
            </div>

            <div>
              <p className="single-profile__title"> Weight:</p>
              <p className="single-profile__text">{profile.weight}</p>
            </div>
            <div>
              <p className="single-profile__title"> Height:</p>
              <p className="single-profile__text">{profile.height}</p>
            </div>
          </section>
          <section className="single-profile__textbox-two">
            <div>
              <p className="single-profile__title">Medical conditions:</p>
              <p className="single-profile__text">{profile.conditions}</p>
            </div>
            <div>
              {" "}
              <p className="single-profile__title">Medications:</p>
              <p className="single-profile__text">{profile.medications}</p>
            </div>
            <div>
              <p className="single-profile__title">Allergies:</p>
              <p className="single-profile__text">{profile.allergies}</p>
            </div>
            <div>
              <p className="single-profile__title">Family doctor:</p>
              <p className="single-profile__text">{profile.doctor}</p>
            </div>
            <div>
              <p className="single-profile__title">Emergency contacts:</p>
              <p className="single-profile__text">{profile.contacts}</p>
            </div>
            <div>
              {" "}
              <p className="single-profile__title"> Other notes:</p>
              <p className="single-profile__text">{profile.notes}</p>
            </div>
            <div>
              {" "}
              <p className="single-profile__title"> Profile last updated:</p>
              <p className="single-profile__text">
                {moment(profile.timestamp).fromNow()}
              </p>
            </div>
          </section>
        </article>
      </section>
      <section className="create-profile__buttons-container">
        <button
          className="create-profile__btns create-profile__btns--cancel"
          onClick={handleSubmitDeleteBtn}
        >
          DELETE
        </button>
        <Link to="/">
          <button
            className="create-profile__save-btn create-profile__btns"
            type="submit"
          >
            EDIT
          </button>
        </Link>
      </section>
    </article>
  );
};

export default ViewSingleProfile;

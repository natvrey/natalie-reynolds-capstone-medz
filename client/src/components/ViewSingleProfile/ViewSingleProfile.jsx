import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./ViewSingleProfile.scss";
const API_URL = process.env.REACT_APP_API_URL;

const ViewSingleProfile = (props) => {
  // if (!props.singleProfile) {
  //   // const profileId = this.props.match.params.profileId;
  //   // console.log(profileId);
  //   // console.log("Hello I'm working!");
  //   console.log(props.match.params.profileId);
  //   return <p className="placeholder">Loading...</p>;
  // }
  // const {
  //   photo,
  //   firstName,
  //   middleName,
  //   lastName,
  //   gender,
  //   birthday,
  //   bloodType,
  //   height,
  //   weight,
  //   conditions,
  //   medications,
  //   allergies,
  //   doctor,
  //   contacts,
  //   notes,
  //   timestamp,
  //   id,
  // } = props.singleProfile;

  // document.title = `${firstName}'s Profile`;

  const [profile, setProfile] = useState("");
  useEffect(() => {
    fetchProfileDetail();
  }, []);
  const profileId = props.match.params.profileId;
  console.log(profileId);

  let fetchProfileDetail = () => {
    const profileId = props.match.params.profileId;
    // console.log(this.props.match);
    axios
      .get(`${API_URL}/profiles/${profileId}`)
      .then((response) => {
        console.log("response");
        setProfile(response.data);
        console.log(response.data, "Success getting profile by id");
      })
      .catch((error) =>
        console.log("Error", error, "profileID" + props.match.params.profileId)
      );
  };

  return (
    <article className="single-profile">
      <h1 className="create-profile__heading">{profile.firstName}'s Profile</h1>
      {/* <div>
        <p className="create-profile__title"> Profile photo: </p>
        <img src={photo} alt="user's profile photo" />
      </div>
      <div>
        <p className="create-profile__title">First name:</p>
        <p>{firstName}</p>
      </div>
      <div>
        <p className="create-profile__title"> Middle name:</p>
        <p>{middleName}</p>
      </div>
      <div>
        <p className="create-profile__title"> Last name: </p>
        <p>{lastName}</p>
      </div>
      <div>
        <p className="create-profile__title"> Gender:</p>
        <p>{gender}</p>
      </div>
      <div>
        <p className="create-profile__title"> Date of Birth:</p>
        <p>{birthday}</p>
      </div>
      <div>
        <p className="create-profile__title">Blood Type:</p>
        <p>{bloodType}</p>
      </div>
      <div>
        <p className="create-profile__title"> Weight:</p>
        <p>{weight}</p>
      </div>
      <div>
        <p className="create-profile__title"> Height:</p>
        <p>{height}</p>
      </div>
      <div>
        <p className="create-profile__title">Medical conditions:</p>
        <p>{conditions}</p>
      </div>
      <div>
        {" "}
        <p className="create-profile__title">Medications:</p>
        <p>{medications}</p>
      </div>
      <div>
        <p className="create-profile__title">Allergies:</p>
        <p>{allergies}</p>
      </div>
      <div>
        <p className="create-profile__title">Family doctor:</p>
        <p>{doctor}</p>
      </div>
      <div>
        <p className="create-profile__title">Emergency contacts:</p>
        <p>{contacts}</p>
      </div>
      <div>
        {" "}
        <p className="create-profile__title"> Other notes:</p>
        <p>{notes}</p>
      </div>
      <div>
        {" "}
        <p className="create-profile__title"> Profile last updated on:</p>
        <p>{moment(timestamp).fromNow()}</p>
      </div>  */}

      <section className="create-profile__buttons-container">
        <button
          className="create-profile__cancel-btn create-profile__btns"
          // onClick={handleSubmitDeleteBtn}
        >
          DELETE
        </button>
        <button
          className="create-profile__save-btn create-profile__btns"
          type="submit"
        >
          EDIT
        </button>
      </section>
    </article>
  );
};

export default ViewSingleProfile;

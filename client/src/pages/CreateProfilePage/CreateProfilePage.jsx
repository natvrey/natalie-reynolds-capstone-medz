import React from "react";
import "./CreateProfilePage.scss";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const CreateProfilePage = (props) => {
  const { history } = props.routerProps;
  document.title = "Create a Profile";

  let handleSubmitCancelBtn = (e) => {
    e.preventDefault();
    alert("Profile creation cancelled!");
    return history.goBack();
  };

  let handleSubmitSave = (e) => {
    axios
      .post(`${API_URL}/videos`, {
        title: e.target.title.value,
        description: e.target.description.value,
      })

      .then((response) => {
        alert("Profile creation successful!");
      })

      .catch((error) => error);

    e.preventDefault();
    return history.goBack();
  };

  return (
    <article className="create-profile">
      <div className="create-profile__divider"></div>
      <h1 className="create-profile__heading">Create a Profile</h1>
      <article className="create-profile__all-flexbox">
        <form
          action={`${API_URL}/profiles`}
          method="POST"
          onSubmit={handleSubmitSave}
        >
          <section className="create-profile__inputs-flexbox">
            <div className="create-profile__input-container">
              <label
                htmlFor="photo"
                className="create-profile__input-title create-profile__label"
              >
                Profile photo
                <input
                  type="text"
                  id="photo"
                  placeholder="Click here to upload a photo"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Click here to upload a photo";
                  }}
                  name="photo"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="firstName"
                className="create-profile__input-title uploads__label"
              >
                First name:
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Enter your first name";
                  }}
                  name="firstName"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="middleName"
                className="create-profile__input-title uploads__label"
              >
                Middle name:
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your middle name"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Enter your middle name";
                  }}
                  name="middleName"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="lastName"
                className="create-profile__input-title uploads__label"
              >
                Last name:
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Enter your last name";
                  }}
                  name="lastName"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="gender"
                className="create-profile__input-title uploads__label"
              >
                Gender
                <input
                  type="text"
                  id="gender"
                  placeholder="This field is optional"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "This field is optional";
                  }}
                  name="gender"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>

            <div className="create-profile__input-container">
              <label
                htmlFor="videoTitle"
                className="create-profile__input-title uploads__label"
              >
                Date of Birth
                <input
                  type="birthday"
                  id="birthday"
                  placeholder="(MM/DD/YYYY)"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "(MM/DD/YYYY)";
                  }}
                  name="birthday"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="bloodType"
                className="create-profile__input-title uploads__label"
              >
                Blood Type
                <input
                  type="text"
                  id="bloodType"
                  placeholder="This field is optional"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "This field is optional";
                  }}
                  name="bloodType"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="weight"
                className="create-profile__input-title uploads__label"
              >
                Weight
                <input
                  type="text"
                  id="weight"
                  placeholder="e.g. 160lbs OR 72.5kg"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "e.g. 160lbs, OR 72.5kg";
                  }}
                  name="weight"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="height"
                className="create-profile__input-title uploads__label"
              >
                Height
                <input
                  type="text"
                  id="height"
                  placeholder="e.g. 5 feet 11 inches, OR 180cm"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "e.g. 5 feet 11 inches, OR 180cm";
                  }}
                  name="height"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="conditions"
                className="create-profile__input-title create-profile__label"
              >
                <p>
                  {" "}
                  Medical <br></br>conditions
                </p>
                <textarea
                  className="uploads__textarea"
                  id="conditions"
                  name="conditions"
                  type="text"
                  placeholder="e.g. Diabetes, Epilepsy, Asthma"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "e.g. Diabetes, Epilepsy, Asthma";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="medications"
                className="create-profile__input-title create-profile__label"
              >
                Medications
                <textarea
                  className="uploads__textarea"
                  id="medications"
                  name="medications"
                  type="text"
                  placeholder="List all medications e.g. Levothyroxine 50mcg, Insulin."
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder =
                      "List all medications e.g. Levothyroxine 50mcg, Insulin.";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="allergies"
                className="create-profile__input-title create-profile__label"
              >
                Allergies
                <textarea
                  className="uploads__textarea"
                  id="allergies"
                  name="allergies"
                  type="text"
                  placeholder="List all allergies & reactions e.g. Peanuts (hives), Seafood (anaphylaxis)"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder =
                      "List all allergies & reactions e.g. Peanuts (hives), Seafood (anaphylaxis)";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="doctor"
                className="create-profile__input-title create-profile__label"
              >
                Family doctor
                <textarea
                  className="uploads__textarea"
                  id="doctor"
                  name="doctor"
                  type="text"
                  placeholder="e.g. Dr. Sandra Yap,Apex Medical, 4-2 Molynes Rd,
                  Kingston, Jamaica, ph: +1 876-960-7905"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a description to your video";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="contacts"
                className="create-profile__input-title create-profile__label"
              >
                Emergency contacts
                <textarea
                  className="uploads__textarea"
                  id="contacts"
                  name="contacts"
                  type="text"
                  placeholder="Name & ph# of your emergency contact(s)"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder =
                      "Name & ph# of your emergency contact(s)";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="notes"
                className="create-profile__input-title create-profile__label"
              >
                Other notes
                <textarea
                  className="uploads__textarea"
                  id="notes"
                  name="notes"
                  type="text"
                  placeholder="e.g. Please call 911 & then call/text an emergency contact"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder =
                      "e.g. Please call 911 & then call/text an emergency contact";
                  }}
                  rows="4"
                  cols="10"
                  required
                  minLength="4"
                ></textarea>{" "}
              </label>
            </div>
          </section>
          <div className="create-profile__button-icon-container">
            <button className="create-profile__publish-button" type="submit">
              SAVE
            </button>
          </div>

          <div className="create-profile__cancel-btn-positioner">
            <button
              className="create-profile__cancel-button"
              onClick={handleSubmitCancelBtn}
            >
              CANCEL
            </button>
          </div>
        </form>
      </article>
    </article>
  );
};

export default CreateProfilePage;

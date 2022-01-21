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
      .post(`${API_URL}/profiles`, {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        birthday: e.target.birthday.value,
        conditions: e.target.conditions.value,
        medications: e.target.medications.value,
        allergies: e.target.allergies.value,
        contacts: e.target.contacts.value,
      })

      .then((response) => {
        alert("Profile creation successful!");
      })

      .catch((error) => error);

    e.preventDefault();
    e.target.reset();
    return history.goBack();
  };

  return (
    <article className="create-profile">
      <h1 className="create-profile__heading">Add Profile Details Below</h1>
      <article className="create-profile__all-flexbox">
        <form
          action={`${API_URL}/profiles`}
          method="POST"
          onSubmit={handleSubmitSave}
        >
          <article className="create-profile__container">
            <div className="create-profile__textbox-one">
              <section className="create-profile__inputs-flexbox">
                <div className="create-profile__input-container">
                  <label htmlFor="photo">
                    <p className="create-profile__title"> Profile photo:</p>
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
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="firstName">
                    <p className="create-profile__title">First name:</p>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "Enter your first name";
                      }}
                      className="create-profile__input"
                      required
                      minLength="4"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="middleName">
                    <p className="create-profile__title"> Middle name:</p>
                    <input
                      type="text"
                      id="middleName"
                      placeholder="Enter your middle name"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "Enter your middle name";
                      }}
                      name="middleName"
                      className="create-profile__input"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="lastName">
                    <p className="create-profile__title"> Last name: </p>
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
                  <label htmlFor="gender">
                    <p className="create-profile__title"> Gender:</p>
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
                    ></input>
                  </label>
                </div>

                <div className="create-profile__input-container">
                  <label htmlFor="birthday">
                    <p className="create-profile__title"> Date of Birth:</p>
                    <input
                      type="birthday"
                      id="birthday"
                      placeholder="MM/DD/YYYY"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "MM/DD/YYYY";
                      }}
                      name="birthday"
                      className="create-profile__input"
                      required
                      minLength="4"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="bloodType">
                    <p className="create-profile__title">Blood Type:</p>
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
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="weight">
                    <p className="create-profile__title"> Weight:</p>
                    <input
                      type="text"
                      id="weight"
                      placeholder="e.g. 160lbs, OR 72.5kg"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "e.g. 160lbs, OR 72.5kg";
                      }}
                      name="weight"
                      className="create-profile__input"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="height">
                    <p className="create-profile__title"> Height:</p>
                    <input
                      type="text"
                      id="height"
                      placeholder="e.g. 5 feet 11 inches, OR 180cm"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder =
                          "e.g. 5 feet 11 inches, OR 180cm";
                      }}
                      name="height"
                      className="create-profile__input"
                    ></input>
                  </label>
                </div>
              </section>
            </div>
            <div className="create-profile__textbox-two">
              <div className="create-profile__input-container">
                <label htmlFor="conditions">
                  <p className="create-profile__title">Medical conditions:</p>
                  <textarea
                    className="create-profile__textarea"
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
                <label htmlFor="medications">
                  <p className="create-profile__title">Medications:</p>
                  <textarea
                    className="create-profile__textarea"
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
                <label htmlFor="allergies">
                  <p className="create-profile__title">Allergies:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="allergies"
                    name="allergies"
                    type="text"
                    placeholder="List all allergies & reactions e.g. Peanuts (hives), Seafood (anaphylaxis)"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder =
                        "List all allergies & reactions e.g. Peanuts (hives), Seafood (anaphylaxis). Type 'none' if you have no allergies";
                    }}
                    rows="4"
                    cols="10"
                    required
                    minLength="4"
                  ></textarea>{" "}
                </label>
              </div>
              <div className="create-profile__input-container">
                <label htmlFor="doctor">
                  <p className="create-profile__title">Family doctor:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="doctor"
                    name="doctor"
                    type="text"
                    placeholder="e.g. Dr. Joe Soe, Apex Medical, 9-2 Molynes Rd, Kingston, Jamaica, ph: +1 876-123-1234"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder =
                        "e.g. Dr. Joe Soe, Apex Medical, 9-2 Molynes Rd, Kingston, Jamaica, ph: +1 876-123-1234";
                    }}
                    rows="4"
                    cols="10"
                  ></textarea>{" "}
                </label>
              </div>
              <div className="create-profile__input-container">
                <label htmlFor="contacts">
                  <p className="create-profile__title">Emergency contacts:</p>
                  <textarea
                    className="create-profile__textarea"
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
                <label htmlFor="notes">
                  <p className="create-profile__title"> Other notes:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="notes"
                    name="notes"
                    type="text"
                    placeholder="e.g. Please call 911 & then call/text emergency contact(s)"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder =
                        "e.g. Please call 911 & then call/text emergency contact(s)";
                    }}
                    rows="4"
                    cols="10"
                  ></textarea>{" "}
                </label>
              </div>
            </div>
          </article>
          <section className="create-profile__buttons-container">
            <button
              className="create-profile__cancel-btn create-profile__btns"
              onClick={handleSubmitCancelBtn}
            >
              CANCEL
            </button>
            <button
              className="create-profile__save-btn create-profile__btns"
              type="submit"
            >
              SAVE
            </button>
          </section>
        </form>
      </article>
    </article>
  );
};

export default CreateProfilePage;

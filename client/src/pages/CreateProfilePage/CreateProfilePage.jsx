import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CreateProfilePage.scss";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const CreateProfilePage = (props) => {
  const { profileId } = useParams();
  const isEditMode = Boolean(profileId);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (isEditMode && profileId) {
      axios
        .get(`${API_URL}/profiles/${profileId}`)
        .then((res) => setProfile(res.data))
        .catch(() => setProfile(null));
    }
  }, [isEditMode, profileId]);

  document.title = isEditMode ? "Edit Profile" : "Create a Profile";

  let handleSubmitCancelBtn = (e) => {
    e.preventDefault();
    if (isEditMode) {
      window.location.href = `/profiles/${profileId}`;
    } else {
      alert("Profile creation cancelled!");
      window.location.href = "/";
    }
  };

  let handleSubmitSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    formData.append("firstName", form.firstName.value);
    formData.append("middleName", form.middleName.value);
    formData.append("lastName", form.lastName.value);
    formData.append("gender", form.gender.value);
    formData.append("birthday", form.birthday.value);
    formData.append("bloodType", form.bloodType.value);
    formData.append("height", form.height.value);
    formData.append("weight", form.weight.value);
    formData.append("conditions", form.conditions.value);
    formData.append("medications", form.medications.value);
    formData.append("allergies", form.allergies.value);
    formData.append("doctor", form.doctor.value);
    formData.append("contacts", form.contacts.value);
    formData.append("notes", form.notes.value);
    if (form.photo.files && form.photo.files[0]) {
      formData.append("photo", form.photo.files[0]);
    }
    const request = isEditMode
      ? axios.put(`${API_URL}/profiles/${profileId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      : axios.post(`${API_URL}/profiles`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
    request
      .then(() => {
        alert(isEditMode ? "Profile updated!" : "Profile creation successful!");
        if (isEditMode) {
          window.location.href = `/profiles/${profileId}`;
        } else {
          form.reset();
          window.location.href = "/profiles";
        }
      })
      .catch((err) => {
        const msg = err.response?.data?.message || err.response?.data || err.message;
        alert("Could not save profile. " + (typeof msg === "string" ? msg : "Please try again."));
      });
  };

  if (isEditMode && !profile) {
    return (
      <article className="create-profile">
        <div className="create-profile__text-container" style={{ padding: "2rem 1rem" }}>
          <p>Loading profile…</p>
        </div>
      </article>
    );
  }

  return (
    <article className="create-profile">
      <h1 className="create-profile__page-heading">{isEditMode ? "Edit Profile" : "Create a Profile"}</h1>
      {!isEditMode && (
      <div className="create-profile__warning">
        <svg className="create-profile__warning-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
        <div className="create-profile__warning-content">
          <h2 className="create-profile__warning-title">Warning</h2>
          <p className="create-profile__warning-text">
            Fields marked with an asterisk (*) are required. Do not input real personal info—this is a demo site; use fake data only.
          </p>
        </div>
      </div>
      )}
      <article className="create-profile__all-flexbox">
        <form key={profileId || "create"} onSubmit={handleSubmitSave}>
          <article className="create-profile__container">
            <div className="create-profile__textbox-one">
              <h2 className="create-profile__section-heading">Basic Info</h2>
              <section className="create-profile__inputs-flexbox">
                <div className="create-profile__input-container">
                  <label htmlFor="img" className="create-profile__title">
                    Upload a profile photo
                  </label>
                  <input
                    className="create-profile__input"
                    id="photo"
                    type="file"
                    name="photo"
                    accept="image/*"
                  ></input>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="firstName">
                    <p className="create-profile__title">First name *:</p>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      defaultValue={profile?.firstName}
                      placeholder="Enter your first name"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "Enter your first name";
                      }}
                      className="create-profile__input"
                      required
                      minLength="2"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="middleName">
                    <p className="create-profile__title"> Middle name:</p>
                    <input
                      type="text"
                      id="middleName"
                      defaultValue={profile?.middleName}
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
                    <p className="create-profile__title"> Last name *: </p>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={profile?.lastName}
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
                      minLength="2"
                    ></input>
                  </label>
                </div>
                <div className="create-profile__input-container">
                  <label htmlFor="gender">
                    <p className="create-profile__title"> Gender:</p>
                    <input
                      type="text"
                      id="gender"
                      defaultValue={profile?.gender}
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
                    <p className="create-profile__title"> Date of Birth *:</p>
                    <input
                      type="date"
                      id="birthday"
                      defaultValue={profile?.birthday}
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
                      defaultValue={profile?.bloodType}
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
                      defaultValue={profile?.weight}
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
                      defaultValue={profile?.height}
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
              <h2 className="create-profile__section-heading">Medical Info</h2>
              <div className="create-profile__input-container">
                <label htmlFor="conditions">
                  <p className="create-profile__title">Medical conditions *:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="conditions"
                    name="conditions"
                    type="text"
                    defaultValue={profile?.conditions}
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
                    minLength="2"
                  ></textarea>{" "}
                </label>
              </div>
              <div className="create-profile__input-container">
                <label htmlFor="medications">
                  <p className="create-profile__title">Medications *:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="medications"
                    name="medications"
                    type="text"
                    defaultValue={profile?.medications}
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
                  <p className="create-profile__title">Allergies *:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="allergies"
                    name="allergies"
                    type="text"
                    defaultValue={profile?.allergies}
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
                    minLength="2"
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
                    defaultValue={profile?.doctor}
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
                  <p className="create-profile__title">Emergency contacts *:</p>
                  <textarea
                    className="create-profile__textarea"
                    id="contacts"
                    name="contacts"
                    type="text"
                    defaultValue={profile?.contacts}
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
                    minLength="2"
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
                    defaultValue={profile?.notes}
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
              className="create-profile__save-btn create-profile__btns"
              type="submit"
            >
              {isEditMode ? "SAVE CHANGES" : "SAVE PROFILE"}
            </button>
            <button
              className="create-profile__btns create-profile__btns--cancel"
              onClick={handleSubmitCancelBtn}
            >
              CANCEL
            </button>          
          </section>
        </form>
      </article>
    </article>
  );
};

export default CreateProfilePage;

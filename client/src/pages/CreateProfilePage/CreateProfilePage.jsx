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
                Profile photo <br></br>
                <input
                  type="text"
                  id="videoTitle"
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
                htmlFor="videoTitle"
                className="create-profile__input-title uploads__label"
              >
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
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
                TITLE YOUR VIDEO <br></br>
                <input
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Add a title to your video";
                  }}
                  name="title"
                  aria-label="Search through website content"
                  className="create-profile__input"
                  required
                  minLength="4"
                ></input>
              </label>
            </div>
            <div className="create-profile__input-container">
              <label
                htmlFor="videoDescription"
                className="create-profile__input-title create-profile__label"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="uploads__textarea"
                  id="videoDescription"
                  name="description"
                  type="text"
                  placeholder="Add a description to your video"
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
                htmlFor="videoDescription"
                className="create-profile__input-title create-profile__label"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="uploads__textarea"
                  id="videoDescription"
                  name="description"
                  type="text"
                  placeholder="Add a description to your video"
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
                htmlFor="videoDescription"
                className="create-profile__input-title create-profile__label"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="uploads__textarea"
                  id="videoDescription"
                  name="description"
                  type="text"
                  placeholder="Add a description to your video"
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
                htmlFor="videoDescription"
                className="create-profile__input-title create-profile__label"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="uploads__textarea"
                  id="videoDescription"
                  name="description"
                  type="text"
                  placeholder="Add a description to your video"
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
                htmlFor="videoDescription"
                className="create-profile__input-title create-profile__label"
              >
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="uploads__textarea"
                  id="videoDescription"
                  name="description"
                  type="text"
                  placeholder="Add a description to your video"
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

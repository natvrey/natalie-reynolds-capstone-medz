import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ViewSingleProfile.scss";

const API_URL = process.env.REACT_APP_API_URL || "";

const parseList = (str) => {
  if (!str || !str.trim()) return [];
  return str
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);
};

const ViewSingleProfile = () => {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    fetchProfileDetail();
  }, [profileId]);

  useEffect(() => {
    if (profile?.firstName) document.title = `${profile.firstName}'s Profile`;
  }, [profile]);

  const handleSubmitDeleteBtn = () => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;
    axios
      .delete(API_URL + "/profiles/" + profileId)
      .then(() => {
        alert("Profile deleted!");
        window.location.href = "/profiles";
      })
      .catch((error) => error);
  };

  const fetchProfileDetail = () => {
    axios
      .get(`${API_URL}/profiles/${profileId}`)
      .then((response) => setProfile(response.data))
      .catch(() => setProfile(null));
  };

  if (!profile) {
    return (
      <article className="single-profile">
        <div className="single-profile__text-container">
          <p>Loading profile…</p>
        </div>
      </article>
    );
  }

  const fullName = [profile.firstName, profile.middleName, profile.lastName].filter(Boolean).join(" ");
  const displayName = profile.firstName || fullName || "—";
  const isUploadedPhoto = profile.photo && profile.photo !== "/images/avatar-placeholder-medz.png";
  const photoSrc = isUploadedPhoto ? `${API_URL}${profile.photo}` : (profile.photo || "/images/avatar-placeholder-medz.png");
  const conditions = parseList(profile.conditions);
  const medications = parseList(profile.medications);
  const allergies = parseList(profile.allergies);

  return (
    <article className="single-profile">
      <div className="single-profile__text-container">
        <header className="single-profile__hero">
          <div className="single-profile__avatar-wrap">
            <img className="single-profile__avatar" src={photoSrc} alt={fullName} />
          </div>
          <div className="single-profile__info-card">
            <h1 className="single-profile__name">{displayName}</h1>
            <p className="single-profile__subtitle">{fullName || "Profile"}</p>
            <div className="single-profile__meta-row">
              <div className="single-profile__meta-item">
                <span className="single-profile__meta-label">DOB</span>
                <span className="single-profile__meta-value">{profile.birthday || "—"}</span>
              </div>
              <div className="single-profile__meta-item">
                <span className="single-profile__meta-label">Blood Type</span>
                <span className="single-profile__meta-value">{profile.bloodType || "—"}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="single-profile__section">
          <h2 className="single-profile__section-title">Conditions</h2>
          {conditions.length > 0 ? (
            <ul className="single-profile__section-list">
              {conditions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="single-profile__text">{profile.conditions || "—"}</p>
          )}
        </div>

        <div className="single-profile__section">
          <h2 className="single-profile__section-title">Medications</h2>
          {medications.length > 0 ? (
            <ul className="single-profile__section-list">
              {medications.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="single-profile__text">{profile.medications || "—"}</p>
          )}
        </div>

        <div className="single-profile__section">
          <h2 className="single-profile__section-title">Allergies</h2>
          {allergies.length > 0 ? (
            <ul className="single-profile__section-list">
              {allergies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="single-profile__text">{profile.allergies || "—"}</p>
          )}
        </div>

        {profile.doctor && (
          <div className="single-profile__section">
            <h2 className="single-profile__section-title">Family doctor</h2>
            <p className="single-profile__text">{profile.doctor}</p>
          </div>
        )}

        {profile.contacts && (
          <div className="single-profile__section">
            <h2 className="single-profile__section-title">Emergency contacts</h2>
            <p className="single-profile__text">{profile.contacts}</p>
          </div>
        )}

        {profile.notes && (
          <div className="single-profile__section">
            <h2 className="single-profile__section-title">Notes</h2>
            <p className="single-profile__text">{profile.notes}</p>
          </div>
        )}

        <p className="single-profile__timestamp">
          Last updated {moment(profile.timestamp).fromNow()}
        </p>

        <section className="single-profile__buttons">
          <Link to={`/profiles/${profileId}/edit`} className="single-profile__btn single-profile__btn--back">
            Edit Profile
          </Link>
          <button
            type="button"
            className="single-profile__btn single-profile__btn--delete"
            onClick={handleSubmitDeleteBtn}
          >
            Delete Profile
          </button>
        </section>
      </div>
    </article>
  );
};

export default ViewSingleProfile;

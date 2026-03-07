import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import AlarmBtn from "../../components/AlarmBtn/AlarmBtn";
import Call911Btn from "../../components/Call911Btn/Call911Btn";
import CallEmergContactBtn from "../../components/CallEmergContactBtn/CallEmergContactBtn";
import TextEmergContactBtn from "../../components/TextEmergContactBtn/TextEmergContactBtn";
import questionIcon from "../../assets/images/question_circle.svg";
import formIcon from "../../assets/images/health_worker_form.svg";
import searchIcon from "../../assets/images/magnifying_glass.png";
import healthIcon from "../../assets/images/health.svg";

const HomePage = () => {
  document.title = "Home";
  return (
    <div className="home-page">
      <section className="home-page__hero">
        <h1 className="home-page__hero-title">Stay Safe, Act Fast!</h1>
      </section>

      <section className="home-page__layout">
        <div className="home-page__actions home-page__actions--left">
          <h2 className="home-page__column-title">Call & Text</h2>
          <Call911Btn />
          <CallEmergContactBtn />
          <TextEmergContactBtn />
        </div>

        <div className="home-page__actions home-page__alarm-column">
          <h2 className="home-page__column-title">Sound the Alarm</h2>
          <AlarmBtn />
        </div>

        <div className="home-page__actions home-page__right-column">
          <h2 className="home-page__column-title home-page__column-title--tools">Tools & Profiles</h2>
          <div className="home-page__tools-grid">
            <Link to="/instructions" className="home-page__tool-card">
              <img src={questionIcon} alt="" />
              <span>How to use this App</span>
            </Link>
            <Link to="/profiles/create" className="home-page__tool-card">
              <img src={formIcon} alt="" />
              <span>Create a Profile</span>
            </Link>
            <Link
              to="/profiles"
              className="home-page__tool-card home-page__tool-card--png-icon"
            >
              <img src={searchIcon} alt="" />
              <span>View All Profiles</span>
            </Link>
            <a
              href="https://www.redcross.org.uk/first-aid/learn-first-aid"
              target="_blank"
              rel="noopener noreferrer"
              className="home-page__tool-card"
            >
              <img src={healthIcon} alt="" />
              <span>First Aid Instructions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

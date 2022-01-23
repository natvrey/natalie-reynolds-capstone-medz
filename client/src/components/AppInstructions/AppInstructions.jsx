import React from "react";
import "./AppInstructions.scss";

const AppInstructions = () => {
  document.title = "Instructions";
  return (
    <article className="instructions">
      <div className="instructions__divider instructions__divider--top"></div>
      <section className="instructions__heading-container">
        <h1 className="instructions__heading">About this App</h1>
      </section>
      <div className="instructions__divider instructions__divider--bottom"></div>
      <p className="instructions__text instructions__text-one">
        Medical emergencies are unpredictable.
      </p>
      <p className="instructions__text">
        {" "}
        Ambulances take patients to the ER{" "}
        <span className="instructions__italics">
          over 16 million times per year{" "}
        </span>{" "}
        in the US.
      </p>
      <p className="instructions__text instructions__list-title">
        During these emergencies:{" "}
      </p>
      <ol>
        <li className="instructions__text">
          Someone may not be immediately available to assist you.
        </li>{" "}
        <li className="instructions__text">
          Bystanders may not be aware that you need help.
        </li>
      </ol>
      <p className="instructions__text instructions__list-title">
        This app allows you to:
      </p>
      <ol>
        <li className="instructions__text">
          Call 911 & your emergency contacts
        </li>
        <li className="instructions__text">
          Activate a distress alarm to alert bystanders that you need help
        </li>
        <li className="instructions__text">
          Store brief medical info that emergency responders may need when
          attending to you
        </li>
      </ol>
      <div className="instructions__divider instructions__divider--top"></div>
      <section className="instructions__heading-container">
        <h2 className="instructions__heading">How to Use It</h2>
      </section>
      <div className="instructions__divider instructions__divider--bottom"></div>
      <p className="instructions__text instructions__text--easy">
        This app is very easy to use! The home page has 8 buttons. Simply click
        on a button to access that feature.
      </p>
      <p className="instructions__text">
        Watch this YouTube video for a{" "}
        <span className="instructions__bold">step-by-step tutorial</span>.{" "}
      </p>
    </article>
  );
};

export default AppInstructions;

import React from "react";
import "./FirstAidBtn.scss";
import buttonIcon from "../../assets/images/health.svg";

const FirstAidBtn = () => {
  const handleClick = () => {
    window.open("https://www.redcross.org.uk/first-aid/learn-first-aid");
  };

  return (
    <button
      className="home-page-buttons first-aid-btn"
      type="button"
      onClick={handleClick}
    >
      <img
        className="first-aid-btn__icon"
        src={buttonIcon}
        alt="first aid instructions icon"
      />
      <p>First Aid Instructions</p>
    </button>
  );
};

export default FirstAidBtn;

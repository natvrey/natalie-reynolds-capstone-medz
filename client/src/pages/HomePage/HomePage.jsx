import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AppInfoBtn from "../../components/AppInfoBtn/AppInfoBtn";
import AlarmBtn from "../../components/AlarmBtn/AlarmBtn";
import Call911Btn from "../../components/Call911Btn/Call911Btn";
import ViewProfilesBtn from "../../components/ViewProfilesBtn/ViewProfilesBtn";
import CreateProfileBtn from "../../components/CreateProfileBtn/CreateProfileBtn";
import FirstAidBtn from "../../components/FirstAidBtn/FirstAidBtn";
import CallEmergContactBtn from "../../components/CallEmergContactBtn/CallEmergContactBtn";
import TextEmergContactBtn from "../../components/TextEmergContactBtn/TextEmergContactBtn";

const HomePage = () => {
  return (
    <>
      <section className="homepage__buttons-container">
        <article className="buttons__flexbox-main">
          <section className="buttons__flexbox-one">
            <AppInfoBtn />
            <CreateProfileBtn />
            <ViewProfilesBtn />
            <FirstAidBtn />
          </section>
          <section className="buttons__flexbox-two">
            <Call911Btn />
            <CallEmergContactBtn />
            <TextEmergContactBtn />
            <AlarmBtn />
          </section>
        </article>
      </section>
    </>
  );
};

export default HomePage;

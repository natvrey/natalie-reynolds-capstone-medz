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

const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="homepage__buttons-container">
        <AppInfoBtn />
        <ViewProfilesBtn />
        <CreateProfileBtn />
        <Call911Btn />
        <AlarmBtn />
        <FirstAidBtn />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

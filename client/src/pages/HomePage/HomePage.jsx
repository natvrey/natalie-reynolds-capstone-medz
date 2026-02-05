import React from "react";
import "./HomePage.scss";
import AppInfoBtn from "../../components/AppInfoBtn/AppInfoBtn";
import AlarmBtn from "../../components/AlarmBtn/AlarmBtn";
import Call911Btn from "../../components/Call911Btn/Call911Btn";
import ViewProfilesBtn from "../../components/ViewProfilesBtn/ViewProfilesBtn";
import CreateProfileBtn from "../../components/CreateProfileBtn/CreateProfileBtn";
import FirstAidBtn from "../../components/FirstAidBtn/FirstAidBtn";
import CallEmergContactBtn from "../../components/CallEmergContactBtn/CallEmergContactBtn";
import TextEmergContactBtn from "../../components/TextEmergContactBtn/TextEmergContactBtn";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const HomePage = () => {
  document.title = "Home";
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0bbff 0%, #fff0f3 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "5vh",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "98vw",
          margin: "0 auto 2.5rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: 38,
            fontWeight: 700,
            marginBottom: 6,
            color: "#7c3aed",
            letterSpacing: "-1px",
            textAlign: "center",
          }}
        >
          Welcome to Medz+
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#b5179e",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Your emergency medical companion. Fast access to help, contacts, and
          first aid.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5vw",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "nowrap",
            width: "100%",
          }}
        >
          <Card
            style={{
              flex: 1,
              minWidth: "31.5vw",
              maxWidth: "31.5vw",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              alignItems: "center",
              background: "#f3e8ff",
              border: "1px solid #e0bbff",
              boxSizing: "border-box",
              overflow: "hidden",
              borderRadius: "1.5rem",
              boxShadow:
                "0 8px 32px 0 rgba(124,58,237,0.18), 0 1.5px 6px 0 rgba(124,58,237,0.10), 0 0.5px 1.5px 0 rgba(124,58,237,0.08)",
              transform: "translateY(-2px) scale(1.01)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                alignItems: "center",
              }}
            >
              <div>
                <AppInfoBtn style={{ width: "100%" }} />
              </div>
              <div>
                <CreateProfileBtn style={{ width: "100%" }} />
              </div>
              <div>
                <ViewProfilesBtn style={{ width: "100%" }} />
              </div>
              <div>
                <FirstAidBtn style={{ width: "100%" }} />
              </div>
            </div>
          </Card>
          <Card
            style={{
              flex: 1,
              minWidth: "31.5vw",
              maxWidth: "31.5vw",
              padding: "1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              alignItems: "center",
              background: "#ffe0f0",
              border: "1px solid #e0bbff",
              boxSizing: "border-box",
              overflow: "hidden",
              borderRadius: "1.5rem",
              boxShadow: "0 4px 24px 0 rgba(181, 23, 158, 0.10)",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                alignItems: "center",
              }}
            >
              <div>
                <Call911Btn style={{ width: "100%" }} />
              </div>
              <div>
                <CallEmergContactBtn style={{ width: "100%" }} />
              </div>
              <div>
                <TextEmergContactBtn style={{ width: "100%" }} />
              </div>
              <div>
                <AlarmBtn style={{ width: "100%" }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

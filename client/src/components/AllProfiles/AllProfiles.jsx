import React from "react";
import { v4 as uuid } from "uuid";
import "./AllProfiles.scss";
import SingleProfileBtn from "../../components/SingleProfileBtn/SingleProfileBtn";

const ViewAllProfilesPage = ({ allProfiles }) => {
  return (
    <section className="app__content-container-aside">
      <aside className="aside">
        <h3 className="aside__title">All Profiles</h3>
        {allProfiles.map((profile) => (
          //   <SingleProfileBtn key={profile.id} profile={profile} />
          <SingleProfileBtn key={uuid()} profile={profile} />
        ))}
      </aside>
    </section>
  );
};

export default ViewAllProfilesPage;

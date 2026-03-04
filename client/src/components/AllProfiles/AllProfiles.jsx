import React from "react";
import "./AllProfiles.scss";
import SingleProfileBtn from "../../components/SingleProfileBtn/SingleProfileBtn";

const AllProfiles = ({ allProfiles }) => {
  document.title = "All Profiles";
  return (
    <section className="all-profiles">
      <div className="all-profiles__heading-container">
        <h1 className="all-profiles__heading">All Profiles</h1>
      </div>
      <div className="all-profiles__grid">
        {allProfiles.map((profile) => (
          <SingleProfileBtn key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
};

export default AllProfiles;

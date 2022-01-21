import React from "react";
import "./AllProfiles.scss";
import SingleProfileBtn from "../../components/SingleProfileBtn/SingleProfileBtn";

const AllProfiles = ({ allProfiles }) => {
  document.title = "All Profiles";
  return (
    <article className="homepage__buttons-container">
      <section className="all-profiles">
        <section className="all-profiles__heading-container">
          <h3 className="all-profiles__heading">All Profiles</h3>
          <div className="all-profiles__divider"></div>
        </section>
        {allProfiles.map((profile) => (
          <SingleProfileBtn key={profile.id} profile={profile} />
        ))}
      </section>
    </article>
  );
};

export default AllProfiles;

import React, { Component } from "react";
import axios from "axios";
import "./ViewAllProfilesPage.scss";
import SingleProfile from "../../components/SingleProfile/SingleProfile";
import AllProfiles from "../../components/AllProfiles/AllProfiles";

const API_URL = process.env.REACT_APP_API_URL;

class ViewAllProfilesPage extends Component {
  state = {
    allProfiles: [],
    singleProfile: null,
  };

  fetchProfileDetail = (profileId) => {
    axios
      .get(`${API_URL}/profiles/${profileId}`)
      .then((response) => {
        this.setState({
          singleProfile: response.data,
        });
      })
      .catch((error) => error);
  };

  componentDidMount() {
    // document.title = "Home";

    axios
      .get(`${API_URL}/profiles`)
      .then((response) => {
        this.setState({
          allProfiles: response.data,
        });

        return response.data[0].id;
      })

      .then((firstProfileId) => {
        const { profileId } = this.props.match.params;
        let profileToLoad;

        if (profileId !== undefined) {
          profileToLoad = profileId;
        } else {
          profileToLoad = firstProfileId;
        }

        this.fetchProfileDetail(profileToLoad);
      })
      .catch((error) => error);
  }

  componentDidUpdate(prevProps) {
    const { profileId } = this.props.match.params;
    let profileToLoad;

    if (prevProps.match.params.profileId !== profileId) {
      if (profileId === undefined) {
        profileToLoad = this.state.allProfiles[0].id;
      } else {
        profileToLoad = profileId;
      }
      this.fetchProfileDetail(profileToLoad);
    }
  }

  render() {
    // const { profileId } = this.props.match.params;
    // const filteredVideos = this.state.nextVideos.filter(
    //   (video) => video.id !== videoId
    // );

    return (
      <section className="app__main-aside-flexbox">
        <SingleProfile singleProfile={this.state.singleProfile} />

        {this.state.allProfiles.length ? (
          <AllProfiles allProfiles={this.state.allProfiles} />
        ) : (
          <p className="placeholder">Loading...</p>
        )}
      </section>
    );
  }
}

export default ViewAllProfilesPage;

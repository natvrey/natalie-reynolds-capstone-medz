import React, { Component } from "react";
// import axios from "axios";
import "./ViewAllProfilesPage.scss";
import ViewSingleProfile from "../../components/ViewSingleProfile/ViewSingleProfile";
import AllProfiles from "../../components/AllProfiles/AllProfiles";

// const API_URL = process.env.REACT_APP_API_URL;

class ViewAllProfilesPage extends Component {
  // state = {
  //   allProfiles: [],
  //   singleProfile: null,
  // };

  // fetchProfileDetail = () => {
  //   const profileId = this.props.match.params.profileId;
  //   console.log(this.props.match);
  //   axios
  //     .get(`${API_URL}/profiles/${profileId}`)
  //     .then((response) => {
  //       this.setState({
  //         singleProfile: response.data,
  //       });
  //       console.log(response.data, "Success getting profile by id");
  //     })
  //     .catch((error) =>
  //       console.log(
  //         "Error",
  //         error,
  //         "profileID" + this.props.match.params.profileId
  //       )
  //     );
  // };

  // componentDidMount() {
  //   document.title = "All Profiles";

  //   axios
  //     .get(`${API_URL}/profiles`)
  //     .then((response) => {
  //       this.setState({
  //         allProfiles: response.data,
  //       });
  //       console.log("Success getting all profiles", response.data);
  //     })

  //     .catch((error) => error);

  //   this.fetchProfileDetail();
  // }

  render() {
    return (
      <section className="">
        <ViewSingleProfile singleProfile={this.state.singleProfile} />

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

// class ViewAllProfilesPage extends Component {
//   state = {
//     allProfiles: [],
//     singleProfile: null,
//   };

//   fetchProfileDetail = (profileId) => {
//     axios
//       .get(`${API_URL}/profiles/${profileId}`)
//       .then((response) => {
//         this.setState({
//           singleProfile: response.data,
//         });
//         console.log(response.data, "Success getting profile by id");
//       })
//       .catch((error) => error, console.log("Error"));
//   };

//   componentDidMount() {
//     document.title = "All Profiles";

//     axios
//       .get(`${API_URL}/profiles`)
//       .then((response) => {
//         this.setState({
//           allProfiles: response.data,
//         });
//       })

//       .then((response) => {
//         console.log("Success getting all profiles");
//       })
//       .catch((error) => error);
//   }

//   //   componentDidUpdate(prevProps) {
//   //     const { profileId } = this.props.match.params;
//   //     let profileToLoad;

//   //     if (prevProps.match.params.profileId !== profileId) {
//   //       if (profileId === undefined) {
//   //         profileToLoad = this.state.allProfiles[0].id;
//   //       } else {
//   //         profileToLoad = profileId;
//   //       }
//   //       this.fetchProfileDetail(profileToLoad);
//   //     }
//   //   }

//   render() {
//     return (
//       <section className="">
//         {/* <ViewSingleProfile singleProfile={this.state.singleProfile} /> */}

//         {this.state.allProfiles.length ? (
//           <AllProfiles allProfiles={this.state.allProfiles} />
//         ) : (
//           <p className="placeholder">Loading...</p>
//         )}
//       </section>
//     );
//   }
// }

// export default ViewAllProfilesPage;

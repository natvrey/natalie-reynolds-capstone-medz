import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PhoneDialer from "./components/PhoneDialer/PhoneDialer";
import HomePage from "./pages/HomePage/HomePage";
import CreateProfilePage from "./pages/CreateProfilePage/CreateProfilePage";
import ViewSingleProfile from "./components/ViewSingleProfile/ViewSingleProfile";
import AllProfiles from "./components/AllProfiles/AllProfiles";
import AppInstructions from "./components/AppInstructions/AppInstructions";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/profiles`)
      .then((response) => {
        setAllProfiles(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <BrowserRouter>
      <div className="app__page-container">
        <Header />
        <div className="app__content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instructions" element={<AppInstructions />} />
            <Route path="/voice" element={<PhoneDialer />} />
            <Route path="/profiles/create" element={<CreateProfilePage />} />
            <Route
              path="/profiles/:profileId"
              element={<ViewSingleProfile />}
            />
            <Route
              path="/profiles"
              element={<AllProfiles allProfiles={allProfiles} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

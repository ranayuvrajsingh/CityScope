import React, { useEffect, useState } from "react";
import ExperienceCard from "../../components/ExperienceCard";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../../store/Slices/ExperienceSlice";
import AllExperienceImg from "../../assets/pngs/AllExperienceImg.jpg";
import "./Experience.css";

import CitySelector from "../../components/TopBar/LocationFilter/CitySelector";

import AllExperiences from "../../components/AllExperiences/AllExperiences";

const Experiences = (props) => {
  const [selectedDate, setSelectedDate] = useState(""); // State to store selected date
  const [selectedCategory, setSelectedCategory] = useState("ALL"); // State to store selected category

  const dispatch = useDispatch();
  const Experiences = useSelector((state) => state.Experience);

  useEffect(() => {
    if (!Experiences.data) {
      dispatch(fetchExperience(selectedCategory)); // Pass selected category to fetch data
    }
  }, [dispatch, selectedCategory]); // Re-fetch data when selected category changes

  const data = Experiences?.data?.data;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="experiences-page">
      <TopBar />
      <Sidebar />
      <div className="jumbotrono p-0" style={{ position: "relative" }}>
        <div className="jumbotron-overlay"></div>
        <img
          src={AllExperienceImg}
          className="img-fluid"
          style={{
            width: "100%",
            height: "55vh",
            objectFit: "cover",
            zIndex: "0",
          }}
          alt="Responsive image"
        />
        <div className="centered-text">
          <h1>Find Your Perfect Experience</h1>
        </div>
        <div className="centered-text-qt">
          <h3>Discover workshops and other events too</h3>
        </div>

        <div
          className="container bg-light"
          style={{
            position: "absolute",
            top: "89%",
            width: "50%",
            marginLeft: "25%",
            borderRadius: "45px", // Adjust this value to control the roundness
            padding: "20px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)",
            height: "90px",
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="row my-3 justify-content-between align-items-center">
            {/* Location Section */}
            <div className="section">
              <h5 style={{ fontSize: "16px" }}>Location</h5>
              <CitySelector />
            </div>

            {/* Dates Section */}
            <div className="section">
              <h5 style={{ fontSize: "16px" }}>Dates</h5>
              <h6
                onClick={() => setSelectedDate("")}
                className={`clickable-placeholder ${
                  selectedDate ? "selected" : ""
                }`}
                style={{
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                Dates
              </h6>
              <input
                type="date"
                className={`form-control ${
                  selectedDate ? "d-block" : "d-none"
                }`}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Category Section */}
            <div>
              <h5 className="mt-2" style={{ fontSize: "16px" }}>
                Category{" "}
              </h5>
              <h6
                onClick={() => setSelectedCategory("")}
                className={`clickable-placeholder ${
                  selectedCategory ? "selected" : ""
                }`}
                style={{
                  marginLeft: "5px",
                  marginRight: "15px",
                  cursor: "pointer",
                }}
              >
                AddCategory
              </h6>
              <select
                className={`form-control ${
                  selectedCategory ? "d-block" : "d-none"
                }`}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {/* Remove the mapping for categories */}
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#BAA3FD",
                  width: "117px",
                  height: "48px",
                  borderRadius: "10px",
                  color: "white",
                  marginLeft: "85px",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginTop: "130px", marginRight: "200px" }}
      >
        <AllExperiences />
      </div>
    </div>
  );
};

export default Experiences;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import { fetchCityBriefById } from "../../store/Slices/CityBriefId"; // Replace with your city brief slice
import "./CityBriefDetails.scss"; // Import your component-specific styles

const CityBriefDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cityBrief = useSelector((state) => state.CityBriefId); // Replace with your state slice for city brief

  console.log("CityBriefPage", cityBrief);
  console.log("CityBriefPageId", id);
  useEffect(() => {
    console.log("Fetching city brief by ID:", id);
    dispatch(fetchCityBriefById(id)); // Replace with your async action to fetch city brief by ID
  }, [dispatch, id]);

  if (cityBrief.isLoading) {
    return <p>Loading...</p>;
  }

  if (cityBrief.isError) {
    return <p>Error occurred while fetching city brief.</p>;
  }

  if (cityBrief.data) {
    const cityBriefData = cityBrief.data;

    return (
      <div className="city-brief-detail">
        <TopBar />
        <Sidebar />
        <div
          className="container"
          style={{ marginTop: "60px", marginRight: "15%" }}
        >
          <div className="city-brief-content">
            {/* Render city brief details */}
            <h1 className="city-brief-title">{cityBriefData.title}</h1>
            <p className="city-brief-description">
              {cityBriefData.description}
            </p>
            {/* Add more elements as needed */}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CityBriefDetails;

import React, { useState } from "react";
import LocationIconCircle from "../../assets/svgs/location.svg";
import SearchIcon from "../../assets/svgs/SearchIcon.svg";
import CityScopeLogo from "../../assets/svgs/CityscopeLogo.svg";
import Circle from "../../assets/svgs/Ellipse 98.svg";

import CityAppLogo from "../../assets/svgs/CityAppLogo.svg";
import CitySelector from "./LocationFilter/CitySelector";

import "./TopBar.scss";
import SearchFilter from "./SearchFilter/SearchFilter";

const TopBar = (props) => {
  const [showContributor, setShowContributor] = useState(false);

  const toggleContributor = () => {
    setShowContributor(!showContributor);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-fill w-100 justify-content-between fixed-top">
      <div
        className="nav-left"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <a className="navbar-brand" href="#">
          <img src={CityAppLogo} width="100%" height="40" alt="" />
        </a>
        <div
          className="nav-item ml-5"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            alignItems: "center",
            width: "210px",
          }}
        >
          <a
            className="navbar ml-2 p-0"
            style={{ borderRadius: "50px" }}
            href="#"
          >
            <div
              className="icon-container"
              style={{ position: "relative", width: "30px", height: "30px" }} // Adjusted the container size
            >
              <img
                src={Circle}
                width="30" // Increased size
                height="30" // Increased size
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                src={LocationIconCircle}
                width="20"
                height="20"
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </a>
          <CitySelector />
        </div>

        <SearchFilter />
      </div>
      <div
        className={`nav-right ${showContributor ? "blur-background" : ""}`}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button
          type="button"
          class="btn btn-primary mr-3 justify-content-center"
          data-toggle="modal"
          data-target="#ContributorPopUp"
          // onClick={toggleContributor}
        >
          Become a contributor
        </button>
        {/* 
        <button type="button" class="btn btn-primary mr-5">
          Subscribe
        </button> */}
        {/* <img
          className="rounded-circle shadow-4-strong"
          width="40"
          height="40"
          alt="avatar2"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        /> */}
      </div>
    </nav>
  );
};

export default TopBar;

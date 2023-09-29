import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../components/Animation/Animation.json";
import Sidebar from "../../components/Sidebar";
import FeaturedContent from "../../components/FeaturedContent";
import WhatsHappening from "../../components/WhatsHappening";
import ExperienceCard from "../../components/ExperienceCard";
import ArticleCard from "../../components/ArticleCard";
import Channels from "../../components/Channels";
import ByteCard from "../../components/ByteCard";
import PositivityCard from "../../components/PositivityCard";
import CityBrief from "../../components/CityBrief";
import TopBar from "../../components/TopBar";
import MorningComp from "../../components/MorningComp";
import FeaturedExp from "../../components/FeaturedExp";
import Suggested from "../../components/Suggested";
import Footer from "../../components/Footer";
import Spotify from "../../components/Spotify/Spotify";
import Card from "../../components/Randomcards/StaggeredCardList";
import Scroller from "../../components/ImageSlider/Scroller";
import StaggeredCardList from "../../components/Randomcards/StaggeredCardList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBytes } from "../../store/Slices/ByteSlice";

import Contibutor from "../../components/Common/Contributor";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [dataLoaded, setDataLoaded] = useState(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
  };
  const loadingDelay = 2000; // Adjust the delay time (milliseconds) as needed

  useEffect(() => {
    // Simulate data fetching with a setTimeout (replace with your actual fetching logic)
    setTimeout(() => {
      // Set dataLoaded to true when data is fetched
      setDataLoaded(true);
    }, loadingDelay); // Adjust the delay time as needed

    // Fetch your data here using dispatch(fetchBytes()) or any other data fetching logic
  }, []);

  if (!dataLoaded) {
    return (
      <div className="loading-animation">
        <Lottie options={animationOptions} height={200} width={200} />
      </div>
    );
  }

  return (
    <>
      <div
        className="home"
        style={{
          marginLeft: "26px",
          marginRight: "px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAFAFA",
          marginTop: "60px",
        }}
      >
        <TopBar />
        <Contibutor />
        <Sidebar />

        <div className="container first-fold">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              {/* <button onClick={(e) => dispatch(fetchBytes())}>
                Fetchbytes
              </button> */}
              {/* {state.Byte.data &&
                state.Byte.data.map((e) => (
                  <li>
                    {e.userId} {e.title}
                  </li>
                ))} */}
              <MorningComp />

              <ByteCard />
            </div>
            <div className="col-6">
              <CityBrief />
              <PositivityCard />
              <Spotify />
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-12" style={{ marginTop: "30px" }}>
              <WhatsHappening />

              <div>
                {" "}
                <FeaturedContent />
              </div>
              <Channels />
              <div> {/* <StaggeredCardList /> */}</div>
              {/* <Scroller /> */}
              <Suggested />
              <Card />

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

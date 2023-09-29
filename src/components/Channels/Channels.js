// Channels.jsx
import React, { useEffect, useState } from "react";
import ChannelCard from "../ChannelCard";
import "./Channels.scss";
import { fetchChannels, selectChannels } from "../../store/Slices/ChannelSlice";
import { useSelector, useDispatch } from "react-redux";
import ChannelsFilter from "../../views/Articles/Filter/ChannelsFilter";
import { useNavigate } from "react-router-dom";
const Channels = (props) => {
  const dispatch = useDispatch();
  const channels = useSelector(selectChannels);
  const navigate = useNavigate();
  useEffect(() => {
    if (!channels.data) {
      dispatch(fetchChannels());
    }
  }, [dispatch]);

  let channelsData = channels?.data?.data || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 5, channelsData.length - 1)
    );
  };

  const visibleChannels = channelsData.slice(currentIndex, currentIndex + 10);
  const handleViewAllChannels = () => {
    try {
      // Perform the navigation to the individual experience page
      navigate(`/articles`, { state: { visibleChannels } });
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div
      className="channels my-5"
      id="ChannelScroll"
      style={{ marginLeft: "95px" }}
    >
      <div className="channels__top" style={{ marginTop: "75px" }}>
        <h2 className="subheading-36">Channels</h2>
        <h5 style={{ marginTop: "-38px" }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "5.2vw", marginLeft: "92%", marginBottom: "20px" }}
            onClick={handleViewAllChannels}
          >
            View All
          </button>
        </h5>
      </div>
      <div className="channels__bottom" style={{}}>
        <button
          type="button"
          className="circular-button prev-button"
          onClick={handlePrevSlide}
          disabled={currentIndex === 0}
          style={{ left: "-50px" }}
        >
          &lt;
        </button>
        <div className="channels__slider-container">
          <div className="channels__row">
            {visibleChannels.slice(0, 5).map((cxp) => (
              <ChannelCard cxp={cxp} key={cxp.id} />
            ))}
          </div>
          <div className="channels__row" style={{ marginTop: "-70px" }}>
            {visibleChannels.slice(5).map((cxp) => (
              <ChannelCard cxp={cxp} key={cxp.id} />
            ))}
          </div>
        </div>
        <button
          type="button"
          className="circular-button next-button"
          onClick={handleNextSlide}
          style={{ right: "-10px" }}
          disabled={currentIndex >= channelsData.length - 10}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Channels;

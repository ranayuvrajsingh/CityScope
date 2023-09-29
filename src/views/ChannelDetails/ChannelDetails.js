import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import { fetchChannelById } from "../../store/Slices/ChannelId"; // You might need to create this slice
import "./ChannelDetails.scss";
import { PlayIcon, SaveIcon, DownloadIcon } from "../../assets/svgs";

const ChannelDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const channel = useSelector((state) => state.ChannelId); // Adjust the state selector accordingly

  useEffect(() => {
    dispatch(fetchChannelById(id));
  }, [dispatch, id]);

  if (channel.isLoading) {
    return <p>Loading...</p>;
  }

  if (channel.isError) {
    return <p>Error occurred while fetching channel.</p>;
  }

  if (channel.data) {
    const channelData = channel.data;

    return (
      <div className="channel-detail">
        <TopBar />
        <Sidebar />
        <div className="container">
          <div className="channel-content">
            <div className="channel-header">
              <img
                className="channel-banner"
                src={channelData.coverImage}
                alt="Channel Banner"
              />
              <h1 className="channel-title">{channelData.title}</h1>
              <p className="channel-description">{channelData.description}</p>
              <div className="channel-icons">
                <button className="icon-button play-button">
                  <PlayIcon />
                </button>
                <button className="icon-button">
                  <SaveIcon />
                </button>
                <button className="icon-button">
                  <DownloadIcon />
                </button>
              </div>
            </div>
            <div className="channel-videos">
              {/* Display the list of videos or content related to the channel here */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ChannelDetails;

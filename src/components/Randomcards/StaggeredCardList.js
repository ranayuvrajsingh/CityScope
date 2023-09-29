import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./StaggeredCardList.css";
import { fetchArticles } from "../../store/Slices/ArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import ArticleIcon from "../../assets/pngs/ArticleIcon.png";
import { fetchChannels, selectChannels } from "../../store/Slices/ChannelSlice";

const StaggeredCardList = () => {
  const dispatch = useDispatch();

  const channels = useSelector(selectChannels);
  const articles = useSelector((state) => state.Articles);
  const [viewAll, setViewAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoData, setVideoData] = useState([]); // Array of video data objects
  const [showVideoTitle, setShowVideoTitle] = useState(false); // State to control video title display

  useEffect(() => {
    if (!channels.data) {
      dispatch(fetchChannels());
    }
  }, [dispatch]);

  let channelsData = channels?.data?.data || [];

  useEffect(() => {
    if (!articles.data) {
      dispatch(fetchArticles());
    }

    // Extract video data from channelsData
    const videoDataArray = channelsData.map((channel) => {
      if (channel.medium_type && channel.medium_type.length > 0) {
        const medium = channel.medium_type[0]; // Assuming the first medium in the array is the video
        return {
          id: channel.id,
          title: medium.name || "Video Title",
          videoUrl: medium.contentUrl,
          coverImage:
            medium.thumbnail || "https://example.com/default-thumbnail.jpg",
        };
      } else {
        return null;
      }
    });

    // Filter out null values
    const filteredVideoData = videoDataArray.filter((video) => video !== null);
    setVideoData(filteredVideoData);
  }, [dispatch, channelsData]);

  const articlesData = articles?.data?.data;

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    768: 1,
  };

  // Function to show video title for a duration and then hide it
  const showTitleForDuration = () => {
    setShowVideoTitle(true);
    setTimeout(() => {
      setShowVideoTitle(false);
    }, 3000); // Adjust the duration (in milliseconds) as needed
  };

  return (
    <div>
      {/* Cards with images */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
        style={{ marginLeft: "6%" }}
      >
        {articlesData?.map((article) => (
          <div
            key={article.id}
            className="masonry-grid-item"
            style={{
              backgroundImage: `url(${article.coverImage})`,
              backgroundSize: "cover",
              height: `${Math.floor(Math.random() * 400 + 200)}px`,
            }}
          >
            <div className="card-content">
              {/* You can use the actual article data here */}
              {/* <h3>{article.title}</h3>
              <p>{article.description}</p> */}
            </div>

            <div className="svg-icon float-right mr-4 mt-3">
              <img
                style={{ backgroundColor: "black", borderRadius: "20%" }}
                src={ArticleIcon}
                alt="ArticleIcon"
              />
            </div>
          </div>
        ))}
      </Masonry>

      {/* Video Cards */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
        style={{ marginLeft: "6%" }}
      >
        {videoData.map((video) => (
          <div
            key={video.id}
            className="masonry-grid-item"
            style={{
              backgroundImage: `url(${video.coverImage})`,
              backgroundSize: "cover",
              height: "590px", // Set a fixed height here
              borderRadius: "25px",
            }}
          >
            <div className="card-content">
              <video
                width="100%"
                controls
                autoPlay
                muted
                playsInline
                onMouseEnter={showTitleForDuration}
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* {showVideoTitle && <h3 className="video-title">{video.title}</h3>} */}
            </div>
          </div>
        ))}
      </Masonry>

      <div
        className="illustration"
        style={{ marginLeft: "-175px", marginTop: "-15%" }}
      >
        <img
          className="GoldenCity"
          src="https://cityscope-dev.s3.ap-south-1.amazonaws.com/city_illustrations/udaipur_illustration.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default StaggeredCardList;

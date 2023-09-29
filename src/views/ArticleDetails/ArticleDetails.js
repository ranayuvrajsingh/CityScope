import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import { fetchArticleById } from "../../store/Slices/ArticleId";
import animationData from "../../components/Animation/Animation.json";
import "./ArticleDetails.scss";
import Lottie from "react-lottie";
import {
  PlayIcon,
  SaveIcon,
  DownloadIcon,
  PlaySign,
  ShareIcon,
} from "../../assets/svgs";
import profilephoto from "../../assets/pngs/profile photo.png";

const ArticleDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const article = useSelector((state) => state.ArticleId);
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [loadingAnimationOptions, setLoadingAnimationOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animationData, // Use the imported animationData
  });

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticleById(id));

    // Fetch suggested articles
    fetch("https://api2.cityscope.media/articles/suggested")
      .then((response) => response.json())
      .then((data) => setSuggestedArticles(data))
      .catch((error) =>
        console.error("Error fetching suggested articles:", error)
      );
  }, [dispatch, id]);

  const handlePlay = () => {
    console.log("Playing article media...");

    // Assuming the article data has an audioURL
    const audioURL = article.data.audioURL;
    if (audioURL) {
      const audioElement = new Audio(audioURL);
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.error("No audio URL found for the article.");
    }
  };

  const handleSave = () => {
    console.log("Saving article...");

    // For simplicity, let's assume you're bookmarking the article
    fetch("https://api2.cityscope.media/articles/bookmark", {
      // Adjust the endpoint as needed
      method: "POST",
      body: JSON.stringify({ articleId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          console.log("Article bookmarked successfully!");
        } else {
          console.log("Error bookmarking article.");
        }
      })
      .catch((error) => {
        console.error("Error saving article:", error);
      });
  };

  const handleDownload = () => {
    console.log("Downloading article...");

    // Create a blob of the article content and trigger a download
    const blob = new Blob([article.data.content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${article.data.title}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleShare = () => {
    if (navigator.share) {
      // Use the Web Share API if available
      navigator
        .share({
          title: article.data.title,
          text: article.data.summary,
          url: window.location.href, // Share the current URL
        })
        .then(() => {
          console.log("Article shared successfully.");
        })
        .catch((error) => {
          console.error("Error sharing article:", error);
        });
    } else {
      // Fallback behavior (e.g., copy link to clipboard)
      const shareableLink = window.location.href;
      const textArea = document.createElement("textarea");
      textArea.value = shareableLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Link copied to clipboard:", shareableLink);
      alert("Link copied to clipboard. You can now share it.");
    }
  };

  if (article.isLoading) {
    return (
      <div className="article-detail">
        <TopBar />
        <Sidebar />
        <Lottie
          options={loadingAnimationOptions}
          height={200}
          width={200}
          style={{ margin: "auto" }}
        />
      </div>
    );
  }

  if (article.isError) {
    return <p>Error occurred while fetching article.</p>;
  }

  if (article.data) {
    const articleData = article.data;

    // Parsing the createdAt date
    const dateObj = new Date(articleData.createdAt);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("en-US", { month: "long" });
    const formattedDate = `${day},${month}`;
    const authorname = "Joe";
    // This will give you the format like "12 May"
    console.log("111111111111111111111", articleData);
    return (
      <div className="article-detail">
        <TopBar />
        <Sidebar />
        <div
          className="container"
          style={{ marginRight: "15%", marginTop: "-5%" }}
        >
          <div className="article-content">
            <div className="article-header">
              <div className="photo-and-info">
                <div
                  className="photo-and-info"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "-13px",
                  }}
                >
                  <img
                    className="circular-photo"
                    src={articleData.coverImage}
                    alt="Article"
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <p style={{ fontSize: "16px", margin: "0", width: "200%" }}>
                      {articleData.author}
                    </p>
                    <p style={{ fontSize: "14px", margin: "0" }}>
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="article-icons" style={{ marginLeft: "37%" }}>
                <div className="shareIcon" style={{ marginLeft: "180px" }}>
                  <button onClick={handleShare} className="icon-button">
                    <ShareIcon />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="container"
              style={{ marginTop: "40px", marginRight: "15%" }}
            >
              <h1
                className="article-title"
                style={{
                  padding: "20px",
                  marginTop: "-10px",
                  width: "86%",
                  fontSize: "36px",
                }}
              >
                {articleData.title}
              </h1>
              <div
                className="article-description"
                style={{
                  padding: "20px",
                  marginBottom: "50px",
                  width: "70%",
                  fontSize: "16px", // Set the font size to 16px (or your desired size)
                  fontStyle: "italic", // Set the font style to italic
                  opacity: 0.7, // Set the opacity to make it faded
                }}
              >
                {articleData.shortDescription}
              </div>
              {articleData.tags.map((tag, index) => (
                <div
                  key={index}
                  className="btn btn-primary"
                  style={{
                    width: "auto", // Set width to 'auto' to allow content to determine width
                    marginBottom: "100px",
                    marginRight: "10px",
                    marginLeft: "20px",
                    borderRadius: "25px",
                    whiteSpace: "nowrap", // Prevent text from wrapping
                    overflow: "hidden", // Hide overflowing text
                    textOverflow: "ellipsis", // Add ellipsis (...) for overflow
                  }}
                >
                  {tag.name}
                </div>
              ))}
              <div
                className="article-content"
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  width: "45vw",
                }}
              >
                <img
                  src={articleData.coverImage}
                  style={{
                    marginTop: "-60px",
                    height: "350px",
                    width: "900px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                  alt="Article Banner"
                />

                <div
                  style={{ marginTop: "40px" }}
                  className="article-text-content"
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="vertical-line"
          style={{
            position: "absolute",
            top: "100px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1px",
            background: "gray",
          }}
        ></div>
      </div>
    );
  }

  return null;
};

export default ArticleDetails;

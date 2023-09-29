import React, { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard";
import "./FeaturedContent.scss";
import { fetchArticles } from "../../store/Slices/ArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const FeaturedContent = (props) => {
  const [contentType, setContentType] = useState("article");
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Articles);
  const navigate = useNavigate();
  const articlesData = articles?.data?.data;
  const [startIndex, setStartIndex] = useState(0); // Added startIndex state

  useEffect(() => {
    if (!articles.data) {
      dispatch(fetchArticles());
    }
  }, [dispatch]);

  const handlePrevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextSlide = () => {
    setStartIndex(
      (prevIndex) => Math.min(prevIndex + 4, articlesData.length - 4) // Display 4 cards at a time
    );
  };

  const visibleArticles = articlesData?.slice(startIndex, startIndex + 4); // Display 4 cards at a time

  return (
    <div className="featured-content my-5" style={{ marginLeft: "98px" }}>
      <div className="featured-content__header">
        <h2
          className="subheading-22"
          style={{ width: "17vw", marginTop: "30px" }}
        >
          Featured Content
        </h2>
        <h5
          id="featureViewAll"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "32px",
            fontStyle: "normal",
            marginTop: "40px",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/articles")}
            style={{ width: "80px" }}
          >
            View All
          </button>
        </h5>
      </div>
      <div
        className="btn btn-primary"
        style={{
          fontSize: "18px",
          width: "10%",
          height: "40px",
          marginRight: "10px",
          borderRadius: "25px",
        }}
      >
        Stories
      </div>
      <div
        className="btn btn-primary"
        style={{
          marginLeft: "5px",
          width: "10%",
          borderRadius: "25px",
          fontSize: "18px",
        }}
      >
        CityGuide
      </div>

      <div
        className="featuredcontent__bottom"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          className="circular-button left"
          style={{
            marginTop: "25px",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
            left: "-6.1%",
          }}
          onClick={handlePrevSlide}
          disabled={startIndex === 0}
        >
          &lt;
        </button>
        {visibleArticles?.map((axp) => (
          <ArticleCard axp={axp} key={axp.id} />
        ))}
        <button
          className="circular-button right"
          style={{
            marginTop: "25px",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handleNextSlide}
          disabled={startIndex >= (articlesData?.length || 0) - 4}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FeaturedContent;

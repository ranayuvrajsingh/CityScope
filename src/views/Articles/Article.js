import React, { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import TopBar from "../../components/TopBar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../store/Slices/ArticleSlice";

const Articles = ({ channelNames }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const dispatch = useDispatch();
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filtersPerPage = 10; // Number of filters to display per page
  const articles = useSelector((state) => state.Articles);

  useEffect(() => {
    dispatch(fetchArticles(selectedCategory));
  }, [dispatch, selectedCategory]);

  const articlesData = articles?.data?.data;

  if (!articlesData) {
    return <div>Loading...</div>;
  }

  // Calculate the start and end indices for the filters to display on the current page
  const startIndex = (currentPage - 1) * filtersPerPage;
  const endIndex = startIndex + filtersPerPage;

  // Filter the channelNames based on the current page
  const filteredChannelNames = showAllFilters
    ? channelNames
    : channelNames.slice(startIndex, endIndex);

  return (
    <div className="articles-page">
      <TopBar />
      <Sidebar />
      <div className="jumbotron p-0">
        <img
          className="img-fluid"
          style={{ width: "100%", height: "60vh" }}
          alt="Responsive image"
        />
      </div>
      <div
        className="container"
        style={{ marginLeft: "200px", marginTop: "100px" }}
      >
        <div id="categories" style={{ marginLeft: "75px" }}>
          {filteredChannelNames.map((channel, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(channel)}
              className={selectedCategory === channel ? "active" : ""}
            >
              {channel}
            </button>
          ))}
          {showAllFilters ? (
            <button onClick={() => setShowAllFilters(false)}>
              Hide Filters
            </button>
          ) : (
            <>
              <button onClick={() => setShowAllFilters(true)}>
                Show All Filters
              </button>
            </>
          )}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          style={{ right: "5%" }}
        >
          &lt;
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button>

        <div className="row">
          {articlesData.map((article) => (
            <div
              className="col-md-4"
              key={article.id}
              style={{
                marginTop: "1px",
                height: "100%",
                marginLeft: "60px",
                marginRight: "-164px",
              }}
            >
              <ArticleCard axp={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;

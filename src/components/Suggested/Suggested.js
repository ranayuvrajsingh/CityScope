import React, { useState } from "react";
import "./Suggested.scss";
import { suggestedforyou } from "../../constants/suggestedicons";
import { Filter, City } from "../../assets/svgs";
import LocationIcon from "../../assets/svgs/LocationIcon.svg";

const Suggested = (props) => {
  const iconsPerPage = 20; // Number of icons to show per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(suggestedforyou.length / iconsPerPage) - 1
      )
    );
  };

  const startIdx = currentPage * iconsPerPage;
  const endIdx = startIdx + iconsPerPage;
  const visibleIcons = suggestedforyou.slice(startIdx, endIdx);

  return (
    <div>
      <div className="suggested" style={{ marginLeft: "84px" }}>
        <h2>Suggested for you</h2>
        <button
          className="btn btn-primary"
          style={{
            height: "6vh",
            width: "6vw",
            marginLeft: "86%",
            marginBottom: "-33px",
            marginTop: "25px",
          }}
        >
          <Filter /> Filter
        </button>
        <button
          className="btn btn-primary"
          style={{
            height: "6vh",
            width: "9.3vw",
            marginLeft: "71%",
            marginBottom: "18px",
            marginTop: "-11px",
          }}
        >
          <img
            src={LocationIcon}
            width="18"
            height="18"
            alt=""
            style={{ verticalAlign: "inherit" }}
          />
          {"    "}
          Choose City
        </button>

        <div className="suggested__top">
          {visibleIcons.map((item, index) => {
            let tab = (
              <div
                style={{
                  display: "inline-block",
                  wordWrap: "break-word",
                  marginRight: "2px",
                }}
                className="suggested__item"
                onClick={() => console.log(item.title)}
                key={index}
              >
                <svg fill="grey" className="abc">
                  {" "}
                  {item.icon}{" "}
                </svg>
                <span className="suggestedtitles">{item.title}</span>
              </div>
            );
            return tab;
          })}
        </div>
        <div className="pagination">
          <button
            className="circular-button left"
            style={{
              marginTop: "151%",
              left: "6.9%",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <button
            className="circular-button right"
            style={{
              marginTop: "151%",
              right: "0.5%",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={handleNextPage}
            disabled={
              currentPage ===
              Math.ceil(suggestedforyou.length / iconsPerPage) - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggested;

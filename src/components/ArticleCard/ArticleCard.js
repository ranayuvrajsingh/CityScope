import React from "react";
import { BookmarkIcon, HeartIcon } from "../../assets/svgs";
import "./ArticleCard.scss";
import { useNavigate } from "react-router-dom";
import ArticleIcon from "../../assets/pngs/ArticleIcon.png";
// import { fetchArticles } from "../../store/Slices/ArticleSlice";

const ArticleCard = ({ axp }) => {
  const navigate = useNavigate();
  console.log("fffffffffArticlesState", axp);

  const handleArticleRouting = (id, articleData) => {
    // Perform the navigation to the individual experience page
    navigate(`/articles/${id}`, { state: { id, articleData } });
  };
  if (!axp) {
    return null; // If "exp" is undefined, return null or a fallback element
  }

  return (
    <>
      <div
        className="card my-4 mx-1"
        style={{
          width: "264px",
          borderRadius: "10px",
          height: "352px",
        }}
        onClick={() => handleArticleRouting(axp.id, axp)}
      >
        <span
          className="ticket subheading-14"
          style={{ backgroundcolor: "transparent" }}
        >
          <img src={ArticleIcon} alt="Article Icon" />;
        </span>
        <img
          className="card-img-top"
          style={{ height: "80%", borderRadius: "10px 10px 0px 0px" }}
          src={axp.coverImage}
          alt="Byte Image"
        />
        <div className="card-body">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h5 className="card-title subheading-16" style={{ width: "90% " }}>
              {axp.title}
            </h5>
            <span>
              <HeartIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

// <div className="content-card">
// <div className="content-card__ticket">
//     Article
// </div>
// <div className="content-card__image">
//     <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/cerebral-dysfunction-callie-fink.jpg"
//     alt="image" />
// </div>

// <div className="text-heading">
//     <div className="heading">Lorem ipsum dolor sit amet consectur adipiscing elit</div>
//     <div><BookmarkIcon className="bookmark"width="48px" height="24px"/></div>
// </div>
// </div>

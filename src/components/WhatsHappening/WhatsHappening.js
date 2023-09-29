import React, { useEffect, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import "./WhatsHappening.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../../store/Slices/ExperienceSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const WhatsHappening = (props) => {
  const dispatch = useDispatch();
  const Experiences = useSelector((state) => state.Experience);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    if (!Experiences.data) {
      dispatch(fetchExperience());
    }
  }, [dispatch]);

  const handleNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Experiences.data.data.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Experiences.data.data.length) %
        Experiences.data.data.length
    );
  };

  const data = Experiences?.data?.data;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="whats-happening my-5">
      <div className="whats-happening__top">
        <h2 className="title" style={{ marginLeft: "95px" }}>
          Bookable Activities and Experiences
        </h2>
        <button
          type="button"
          id="view-button"
          className="btn btn-primary"
          onClick={() => navigate("/Experiences")} // Use the navigate function directly
        >
          View All
        </button>
      </div>
      <div className="cards-flex-container">
        <button
          id="circular-button left"
          className="circular-button left"
          type="button"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <div
          className="whats-happening__bottom"
          style={{ marginLeft: "78px", marginTop: "20px" }}
        >
          {data.slice(currentIndex, currentIndex + 3).map((exp) => (
            <ExperienceCard exp={exp} key={exp.id} />
          ))}
        </div>
        <button
          id="circular-button right"
          className="circular-button right"
          type="button"
          onClick={handleNextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default WhatsHappening;

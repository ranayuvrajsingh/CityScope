import React, { useEffect, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import "./SimilarExperiences.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../../store/Slices/ExperienceSlice";

const SimilarExperiences = (props) => {
  const dispatch = useDispatch();
  const Experiences = useSelector((state) => state.Experience);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!Experiences.data) {
      dispatch(fetchExperience());
    }
  }, [dispatch]);

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Experiences.data.data.length
      );
    }, 3000); // Change every 3 seconds

    return () => {
      clearTimeout(autoSlide); // Clear the timeout when the component is unmounted
    };
  }, [currentIndex, Experiences.data]);
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

  const visibleCards = data.slice(currentIndex, currentIndex + 3);

  return (
    <div className="whats-happening my-5">
      <div className="whats-happening__top">
        <h2 className="title" style={{ marginLeft: "5px", color: "#533B9A" }}>
          Similar Experiences For You
        </h2>
      </div>
      <div className="cards-flex-container">
        {/* <button
          id="circular-button left"
          className="circular-button left"
          type="button"
          onClick={handlePrevSlide}
        >
          &lt;
        </button> */}
        <div
          className="whats-happening__bottom"
          style={{ marginLeft: "-18px", marginTop: "20px" }}
        >
          {visibleCards.map((exp) => (
            <ExperienceCard exp={exp} key={exp.id} />
          ))}
        </div>
        {/* <button
          id="circular-button right"
          className="circular-button right"
          type="button"
          onClick={handleNextSlide}
        >
          {">"}
        </button> */}
      </div>
    </div>
  );
};

export default SimilarExperiences;

import React, { useEffect, useState } from "react";
import ExperienceCard from "../ExperienceCard";
import "./AllExperiences.scss"; // You can create a separate stylesheet for styling
import { useSelector, useDispatch } from "react-redux";
import { fetchExperience } from "../../store/Slices/ExperienceSlice";

const AllExperiences = (props) => {
  const dispatch = useDispatch();
  const Experiences = useSelector((state) => state.Experience);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!Experiences.data) {
      dispatch(fetchExperience());
    }
  }, [dispatch]);

  const handleNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 4) % Experiences.data.data.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 4 + Experiences.data.data.length) %
        Experiences.data.data.length
    );
  };

  const data = Experiences?.data?.data;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="all-experiences my-5">
      <div className="all-experiences-top">
        <h4
          className="all-experiences-title"
          style={{ marginLeft: "20px", marginBottom: "35px", fontSize: "24px" }}
        >
          Top Rated Experiences
        </h4>
      </div>
      <div className="cards-row-container">
        <button
          className="circular-button left"
          type="button"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <div className="cards-row">
          {data.slice(currentIndex, currentIndex + 3).map((exp) => (
            <ExperienceCard exp={exp} key={exp.id} />
          ))}
        </div>
        <button
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

export default AllExperiences;

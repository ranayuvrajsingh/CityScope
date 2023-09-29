import React from "react";
import { HeartIcon } from "../../assets/svgs";
import "./ExperienceCard.scss";
import { useNavigate } from "react-router-dom";

const ExperienceCard = ({ exp }) => {
  const navigate = useNavigate();

  // Function to extract date and time from the provided ISO string
  // Function to extract date in the desired format from the provided ISO string
  const formatDate = (isoString) => {
    const dateObj = new Date(isoString);
    const options = {
      weekday: "long",
      // year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString(undefined, options); // e.g., "Thursday, January 1"
    return formattedDate;
  };
  const formattedDate = formatDate(exp.startCsExp);
  console.log("Expxppxppxp", exp);
  // Usage example:

  // console.log("expepxppepep", exp);

  // console.log("qqqqqDate:", date); // Output: Date: 7/16/2023 (in en-US locale format)
  // console.log("qqqqqqTime:", time); // Output: Time: 1:30:00 AM (in en-US locale format)

  // Function to handle experience routing when card is clicked
  const handleExperienceRouting = (id, experienceData) => {
    // Perform the navigation to the individual experience page
    navigate(`/Experiences/${id}`, { state: { id, experienceData } });
  };

  // Check if "exp" is defined before accessing its properties
  if (!exp) {
    return null; // If "exp" is undefined, return null or a fallback element
  }

  return (
    <div
      className="card"
      style={{
        width: "360px",
        borderRadius: "10px",
        marginLeft: "20px",
        // height: "420px",
      }}
      onClick={() => handleExperienceRouting(exp.id, exp)}
    >
      <span
        className="ticket subheading-16"
        style={{ backgroundColor: "#533B9A", right: "1%", color: "white" }}
      >
        {exp.classification?.name}
      </span>
      <img
        className="card-img-top"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px 10px 0 0",
        }}
        src={exp.hostImage}
        alt="Experience Image"
      />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h5 className="card-title" style={{ width: "100%" }}>
            {exp.title}
          </h5>
          {/* <span>
            <HeartIcon />
          </span> */}
        </div>
        <p className="card-text mb-0"></p>
        <p className="card-text">
          {formattedDate} {/* Display the formatted date */}
          <br />
          {exp.city.name},Rajasthan
        </p>
      </div>
      <ul
        className="list-group list-group-flush subheading-16"
        style={{ color: "$blue-b500" }}
      >
        <li
          className="list-group-item heading-20"
          style={{
            backgroundColor: "#F3EFFF",
            padding: "20px",
            marginBottom: "",
          }}
        >
          <p style={{ fontSize: "24px", color: "#533B9A", marginTop: "6px" }}>
            {" "}
            Rs.{exp.pricePerPass} onwards
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;

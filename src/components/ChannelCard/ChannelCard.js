import React from "react";
import "./ChannelCard.scss";
import { ArrowSign, arrow } from "../../assets/svgs";

const ChannelCard = ({ cxp }) => {
  console.log("CCCCCCCCCCCCCCCC", cxp);

  if (!cxp) {
    return null; // If "exp" is undefined, return null or a fallback element
  }
  return (
    <div
      className="card border-0"
      style={{
        backgroundColor: "#FAFAFA",
        width: "180px",
        height: "280px",
        marginRight: "43px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="channel-card__image"
        style={{ width: "100%", height: "77%" }}
      >
        <img
          src={cxp.image}
          alt="image"
          style={{
            width: "65%",
            height: "65%",
            borderRadius: "500px",
            objectFit: "fill",
            marginLeft: "5px",
          }}
        />
      </div>
      <div
        className="channel-card__details text-center subheading-16"
        style={{ height: "120px", marginRight: "50px", marginBottom: "10px" }}
      >
        <div style={{ marginTop: "-41px", fontSize: "20px" }}> {cxp.name}</div>

        {/* <ArrowSign /> */}
        {/* <p>{cxp.description}</p> */}
      </div>
    </div>
  );
};

export default ChannelCard;

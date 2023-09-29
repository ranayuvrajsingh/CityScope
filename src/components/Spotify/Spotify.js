import React from "react";
import "./Spotify.scss";

const Spotify = (props) => {
  return (
    <div
      className="card spotify-card"
      style={{
        marginTop: "5%",
        height: "237px",
        borderRadius: "20px",
        overflow: "hidden", // Add this CSS property
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/show/7fwLZySzowQw01qj2idxrq?utm_source=generator"
        width="100%"
        height="150%"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
        Spotify
      </iframe>
    </div>
  );
};

export default Spotify;

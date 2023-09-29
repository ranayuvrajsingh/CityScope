// Login.js

import React, { useState } from "react";
import "./Login.css";
import { Facebook, Twitter, Linkedin, CityscopeIcon1 } from "../../assets/svgs";
import { CityscopeLogo } from "../../assets/svgs"; // Import the SVG logo file

const Login = () => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div id="login-container">
      <div id="image-container">
        {/* Use your placeholder image */}
        <img
          src={require("../../assets/pngs/BoatImage.jpg")}
          alt="Placeholder Image"
        />
        {/* Add the logo to the top left corner */}
        <div className="logo">
          <CityscopeLogo />
        </div>
      </div>
      <div id="login-form">
        <h2>Login</h2>

        <button className="btn btn-danger login-button" id="google-button">
          <i className="bi bi-google"></i> Sign in with Google
        </button>
        <button className="btn btn-primary login-button" id="facebook-button">
          <i className="bi bi-facebook"></i> Sign in with Facebook
        </button>
        <button className="btn btn-dark login-button" id="apple-button">
          <i className="bi bi-apple"></i> Sign in with Apple
        </button>
      </div>
    </div>
  );
};

export default Login;

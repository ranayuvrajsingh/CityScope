import React from "react";
import { useState } from "react";
import "./PopUp.css";
export default function PopUp() {
  const [popup, setpopup] = useState(false);

  const togglePopUp = () => {
    setpopup(!popup);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., make an API call

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <button onClick={togglePopUp} className="btn-popup">
        open
      </button>
      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="emailInput">Email:</label>
                  <input
                    type="email"
                    id="emailInput"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="passwordInput">Password:</label>
                  <input
                    type="password"
                    id="passwordInput"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <button type="submit">Log In</button>
              </form>
            </div>
            <button className="close-popup" onClick={togglePopUp}>
              close
            </button>

            {/* ------------------------------------------ */}
          </div>
        </div>
      )}
    </>
  );
}

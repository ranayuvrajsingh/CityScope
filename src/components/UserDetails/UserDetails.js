import React, { useState } from "react";
import "./UserDetails.css";
import Login from "../LoginPage/Login";

const UserDetails = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [popup, setPopup] = useState(false);

  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePopup = () => {
    setPopup(!popup);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., make an API call

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

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
    <div className="">
      <h2 className="my-5">User Details</h2>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="subheading-14" htmlFor="firstNameInput">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                placeholder="Enter name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label className="subheading-14" htmlFor="lastNameInput">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                placeholder="Enter name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label className="subheading-14" htmlFor="emailInput">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Enter name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label className="subheading-14" htmlFor="phoneInput">
                Phone number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Enter phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary mt-4"
              type="button"
              style={{ width: "20%" }}
              onClick={togglePopup}
            >
              Book
            </button>
          </form>
        </div>
        <div className="col-6">
          <h3 className="mx-5">Your Booking</h3>

          <p className="subheading-14 mx-5 mt-3">
            Dates <span style={{ float: "right" }}>Edit</span>
          </p>
          <p className="subbody-14 mx-5">09Jan - 13 Jan</p>
          <p className="subheading-14 mx-5 mt-3">
            Guests <span style={{ float: "right" }}>Edit</span>
          </p>
          <p className="subbody-14 mx-5">1 Guest</p>
          <div
            className="mx-5 my-3"
            style={{
              width: "90%",
              height: "252px",
              backgroundColor: "aqua",
              borderRadius: "16px",
            }}
          >
            <div
              className="card p-1"
              style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            >
              <div
                className="card-header"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <h4>Rs 2598 </h4>
                <span style={{ marginLeft: "auto" }}>4 days experiences</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div>
                    <h5>Price Breakdown</h5>
                    <p>
                      <span style={{ float: "left" }}>Rs 6669 x 1 guest</span>
                      <span style={{ float: "right" }}>Rs 6669</span>
                    </p>
                    <br />
                    <p>
                      <span style={{ float: "left" }}>Service Fee</span>
                      <span style={{ float: "right" }}>Rs 1080</span>
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <p>Rs 7749</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {popup && (
        <div className="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            {/* <div>
              <h2>Login</h2>
              {
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
              }
            </div> */}
            <Login />
            <button className="close-popup" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;

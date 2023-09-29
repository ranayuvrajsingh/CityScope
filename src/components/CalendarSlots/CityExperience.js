import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityExperience = ({ days, experienceTemp }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(1); // State for the number of guests

  const handleBooking = () => {
    navigate("/bookingdetails"); // Navigate to the "bookingdetails" page
  };

  // Function to generate an array of numbers from 1 to the maximum number of guests (20)
  const generateGuestOptions = () => {
    const maxGuests = 20;
    return Array.from({ length: maxGuests }, (_, index) => index + 1);
  };

  // Calculate price breakdown and total dynamically based on state values
  const pricePerGuest = 999;
  const serviceFee = 1080;
  const price = 999;
  const totalPrice = price * guests + serviceFee;

  return (
    <div
      style={{
        width: "100%",
        height: "580px",
        backgroundColor: "aqua",
        borderRadius: "16px",
      }}
    >
      <div
        className="card p-1"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <div
          className="card-header"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <h4>{/* {price} */}</h4> &nbsp; {days} City Experience days
          experiences
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div
              className="form-group p-2"
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "10px",
              }}
            >
              <div>
                <label htmlFor="start_date">Select Trip Date</label>
                <input
                  type="date"
                  id="start_date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]} // Set min date to today
                  style={{
                    width: "100%", // Make the input bar 100% wide
                    height: "40px", // Adjust height as needed
                    padding: "8px", // Add some padding for aesthetics
                    fontSize: "16px", // Adjust font size as needed
                    borderRadius: "8px", // Round the corners
                    border: "1px solid #E2E8F0", // Add a border
                  }}
                />
              </div>
              <div className="my-2">
                <label htmlFor="guests">Guests</label>
                <br />
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  style={{
                    width: "100%", // Make the dropdown 100% wide
                    height: "40px", // Adjust height as needed
                    padding: "8px", // Add some padding for aesthetics
                    fontSize: "16px", // Adjust font size as needed
                    borderRadius: "8px", // Round the corners
                    border: "1px solid #E2E8F0", // Add a border
                  }}
                >
                  {/* Populate options from 1 to a maximum of 20 guests */}
                  {generateGuestOptions().map((num) => (
                    <option key={num} value={num}>
                      {num} Guest
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <button
              className="btn btn-primary"
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "10px",
              }}
              onClick={handleBooking}
            >
              Book
            </button>
            <br />
            <p className="my-1" style={{ textAlign: "center", color: "grey" }}>
              You won't be charged yet
            </p>
          </li>
          <li className="list-group-item">
            <div>
              <h5>Price Breakdown</h5>
              <p>
                <span style={{ float: "left" }}>
                  {price} x {guests} Guest
                </span>
                <span style={{ float: "right" }}>{pricePerGuest}</span>{" "}
              </p>
              <br />
              <p>
                <span style={{ float: "left" }}>Service Fee</span>
                <span style={{ float: "right" }}>{serviceFee}</span>{" "}
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <div
              className="justify-content-between"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={{ fontWeight: "bold" }}>Total</p>
              <p style={{ fontWeight: "bold" }}>{totalPrice}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CityExperience;

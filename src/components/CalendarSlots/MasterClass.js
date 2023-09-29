import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MasterClass = ({ days, experienceTemp }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1); // State for the number of guests

  const handleBooking = () => {
    navigate("/bookingdetails"); // Navigate to the "bookingdetails" page
  };

  // Function to generate an array of numbers from 1 to the maximum number of guests (20)
  const generateGuestOptions = () => {
    const maxGuests = experienceTemp.slots[0].noOfSeats;
    return Array.from({ length: maxGuests }, (_, index) => index + 1);
  };

  // Replace the following lines with your actual date and time strings in the desired format
  const dateAndTimeStrings = [
    "2023-07-16T01:30:00.000Z",
    "2023-07-17T02:45:00.000Z",
    "2023-07-18T03:15:00.000Z",
  ];

  // Function to extract date and time separately from the provided date string
  const extractDateAndTime = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const formattedDate = dateObj.toISOString().split("T")[0]; // E.g., "2023-07-16"
    const formattedTime = dateObj.toLocaleTimeString(); // E.g., "01:30:00 AM" (or your local time format)
    return { formattedDate, formattedTime };
  };

  // Calculate price breakdown and total dynamically based on state values
  const pricePerGuest = 999;
  const serviceFee = 1080;
  const price = 999;
  const totalPrice = price * guests + serviceFee;

  // Function to get the available time options for the selected date
  const getAvailableTimeOptions = () => {
    if (!selectedDate) {
      return [];
    }

    // Filter the time strings from the dateAndTimeStrings array for the selected date
    const selectedDateTimes = dateAndTimeStrings.filter((dateTime) => {
      const { formattedDate } = extractDateAndTime(dateTime);
      return formattedDate === selectedDate;
    });

    // Extract and return only the time strings from the filtered date and time strings
    const availableTimes = selectedDateTimes.map(
      (dateTime) => extractDateAndTime(dateTime).formattedTime
    );

    return availableTimes;
  };

  return (
    <div>
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
            <h4>{/* {price} */}</h4> &nbsp; {days} RecurringEvent days
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
                    min={
                      extractDateAndTime(dateAndTimeStrings[0]).formattedDate
                    } // Set min date to the first extracted date
                    max={
                      extractDateAndTime(
                        dateAndTimeStrings[dateAndTimeStrings.length - 1]
                      ).formattedDate
                    } // Set max date to the last extracted date
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
                  <label htmlFor="start_time">Select Trip Time</label>
                  <input
                    type="time"
                    id="start_time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
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
              <p
                className="my-1"
                style={{ textAlign: "center", color: "grey" }}
              >
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
            {/* Display the extracted date and time */}
            <li className="list-group-item">
              <div>
                <p>Date: {selectedDate}</p>
                <p>Time: {selectedTime}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;

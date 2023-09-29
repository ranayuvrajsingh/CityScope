import React from "react";
import { useNavigate } from "react-router-dom";

const BookingConfirmationModal = (props) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "40%",
        height: "580px",
        backgroundColor: "aqua",
        borderRadius: "16px",
      }}
    >
      <div
        class="card p-1"
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
      >
        <div class="card-header" style={{ alignItem: "center" }}>
          <h5>Great!</h5> <h3> Hi Citizen! Your booking has been confirmed.</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p>An Adventurous Hike to Eagle Peak</p>
            <p>4 day experience</p>
            <p>Dublin mall street, Jaipur</p>
            <p>
              <span style={{ float: "left" }}>Summary</span>
              <span style={{ float: "right" }}>Share</span>{" "}
            </p>
            <br></br>

            <p>
              <span style={{ float: "left" }}>Booking ID</span>
              <span style={{ float: "right" }}>TR9AE8Y</span>{" "}
            </p>
            <br></br>
            <p>
              <span style={{ float: "left" }}>Date</span>
              <span style={{ float: "right" }}>09 Jan - 13 Jan</span>{" "}
            </p>
            <br />

            <p>
              <span style={{ float: "left" }}>Rs 6669 x 1 guests</span>
              <span style={{ float: "right" }}>Rs 6669</span>{" "}
            </p>
            <br></br>
            <p>
              <span style={{ float: "left" }}>Service Fee</span>
              <span style={{ float: "right" }}>Rs 1080</span>{" "}
            </p>
          </li>
          <li class="list-group-item">
            <div
              className="justify-content-between"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p>Total</p>
              <p>7749</p>
            </div>
          </li>
          <li class="list-group-item">
            <button
              className="btn btn-primary"
              style={{ width: "100%", height: "48px", borderRadius: "10px" }}
              onClick={() => {
                navigate("/experiences/abc");
              }}
            >
              Done
            </button>
            <br></br>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;

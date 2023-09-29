import React from "react";

const ReviewBooking = ({ componentToShow, ...props }) => {
  return (
    <div style={{ width: "70%" }}>
      <h3 className="my-5">Review Booking</h3>

      <p className="subheading-16 mt-3">
        Experience Name <p style={{ float: "right" }}>Total Price</p>
      </p>
      <p className="subbody-16">
        An adventure Hike to Eagle Peak{" "}
        <p
          className="subheading-24"
          style={{ color: "purple", float: "right" }}
        >
          2598
        </p>
        <p className="subbody-12">4 day experience</p>
      </p>

      <p className="subheading-14  mt-3">
        Guests <p style={{ float: "right" }}>Dates</p>
      </p>
      <p className="subbody-14 ">
        1 Guests <p style={{ float: "right" }}>09Jan - 13 Jan</p>
      </p>

      <hr />
      <h5>Price Breakdown</h5>
      <p>
        <span style={{ float: "left" }}>Rs 6669 x 1 guests</span>
        <span style={{ float: "right" }}>Rs 6669</span>{" "}
      </p>
      <br></br>
      <p>
        <span style={{ float: "left" }}>Service Fee</span>
        <span style={{ float: "right" }}>Rs 1080</span>{" "}
      </p>

      <br />
      <hr />
      <p>
        <span style={{ float: "left" }}>Total</span>
        <span
          className="subheading-16"
          style={{ color: "purple", float: "right" }}
        >
          Rs 7749
        </span>{" "}
      </p>

      <button
        className="btn btn-primary my-5"
        onClick={() => {
          componentToShow(4);
        }}
        type="submit"
        style={{ float: "left", width: "20%" }}
      >
        Book
      </button>
      <button
        className="btn btn-primary mx-5 my-5"
        onClick={() => {
          componentToShow(5);
        }}
        type="submit"
        style={{ float: "left", width: "20%" }}
      >
        Cancel
      </button>
    </div>
  );
};

export default ReviewBooking;

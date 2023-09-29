import React, { useEffect, useState } from "react";
import Contribute_1 from "../../assets/pngs/Contribute_1.png";
import Contribute_2 from "../../assets/pngs/Contribute_2.png";
import Contribute_3 from "../../assets/pngs/Contribute_3.png";
import Contribute_4 from "../../assets/pngs/Contribute_4.png";
import Contribute_1Icon from "../../assets/svgs/Contribute_1.svg";
import Contribute_2Icon from "../../assets/svgs/Contribute_2.svg";
import Contribute_3Icon from "../../assets/svgs/Contribute_3.svg";
import Contribute_4Icon from "../../assets/svgs/Contribute_4.svg";
import "./contributor.scss";
const Contributor = (props) => {
  return (
    <div
      class="modal fade"
      id="ContributorPopUp"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ContributorPopUp"
      aria-hidden="true"
    >
      <div class=" modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ContributorPopUp">
              How would you like to contribute here?
            </h5>
            <button
              type="button"
              class="close  btn-secondary"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              class="card w-100"
              style={{
                backgroundImage: `url(${Contribute_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "90%", // You can adjust the height as needed
                border: "none", // Hide the card border
                cursor: "pointer", // Change cursor to pointer on hover
              }}
              onClick={() => {
                // Handle the click event here, e.g., navigate to a different page
                // You can replace the code inside this functrion with your desired actrion
                window.open(
                  "https://notionforms.io/forms/contribute-content",
                  "_blank"
                );
              }}
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-10">
                    <h5 class="card-title" style={{ color: "white" }}>
                      Share Content &nbsp; {" > "}
                    </h5>
                    <p class="card-text" style={{ color: "white" }}>
                      Send us your articles, videos, recommendations
                    </p>
                  </div>
                  <img
                    className="col-sm-2"
                    src={Contribute_1Icon}
                    alt="sans"
                    // Adjust the width and height as needed
                  />
                </div>
              </div>
            </div>
            <br></br>
            {/* ----------------------------------- */}
            <div
              class="card w-100"
              style={{
                backgroundImage: `url(${Contribute_2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "90%", // You can adjust the height as needed
                border: "none", // Hide the card border
                cursor: "pointer", // Change cursor to pointer on hover
              }}
              onClick={() => {
                // Handle the click event here, e.g., navigate to a different page
                // You can replace the code inside this functrion with your desired actrion
                window.open(
                  "https://notionforms.io/forms/create-an-experience",
                  "_blank"
                );
              }}
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-10">
                    <h5 class="card-title" style={{ color: "white" }}>
                      Host a City Experience&nbsp; {" > "}
                    </h5>
                    <p class="card-text" style={{ color: "white" }}>
                      Have a unique city Experience idea? Host and co-create
                      with us
                    </p>
                  </div>
                  <img
                    className="col-sm-2"
                    src={Contribute_2Icon}
                    alt="sans"
                    // Adjust the width and height as needed
                  />
                </div>
              </div>
            </div>
            <br></br>
            {/* ------------------------------------------------------ */}
            <div
              class="card w-100"
              style={{
                backgroundImage: `url(${Contribute_3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "90%", // You can adjust the height as needed
                border: "none", // Hide the card border
                cursor: "pointer", // Change cursor to pointer on hover
              }}
              onClick={() => {
                // Handle the click event here, e.g., navigate to a different page
                // You can replace the code inside this functrion with your desired actrion
                window.open(
                  "https://notionforms.io/forms/list-your-business-or-service",
                  "_blank"
                );
              }}
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-10">
                    <h5 class="card-title" style={{ color: "white" }}>
                      List your local business&nbsp; {" > "}
                    </h5>
                    <p class="card-text" style={{ color: "white" }}>
                      Let the city know of your products and services through us
                    </p>
                  </div>
                  <img
                    className="col-sm-2"
                    src={Contribute_3Icon}
                    alt="sans"
                    // Adjust the width and height as needed
                  />
                </div>
              </div>
            </div>
            <br></br>
            {/* ---------------------------------------------------- */}
            <div
              class="card w-100"
              style={{
                backgroundImage: `url(${Contribute_4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "90%", // You can adjust the height as needed
                border: "none", // Hide the card border
                cursor: "pointer", // Change cursor to pointer on hover
              }}
              onClick={() => {
                // Handle the click event here, e.g., navigate to a different page
                // You can replace the code inside this functrion with your desired actrion
                window.open(
                  "https://notionforms.io/forms/list-job-opportunities",
                  "_blank"
                );
              }}
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-10">
                    <h5 class="card-title" style={{ color: "white" }}>
                      List job opportunities&nbsp; {" > "}
                    </h5>
                    <p class="card-text" style={{ color: "white" }}>
                      Looking for local talent? List your job vacanies on our
                      platform{" "}
                    </p>
                  </div>
                  <img
                    className="col-sm-2"
                    src={Contribute_4Icon}
                    alt="sans"
                    // Adjust the width and height as needed
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" class="btn btn-primary">
                  Save changes
                </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributor;

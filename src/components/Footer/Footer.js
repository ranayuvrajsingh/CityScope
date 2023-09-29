import React from "react";
import "./Footer.scss";
import { FaArrowRight } from "react-icons/fa";
import { Facebook, Twitter, Linkedin, CityscopeIcon1 } from "../../assets/svgs";
import Yellow_CityScope_Logo from "../../assets/pngs/cityscope logo (2).png";
const Footer = (props) => {
  const handleNameClick = (name) => {
    console.log(`Clicked on ${name}`);
    // Add your custom logic here for handling the click event
  };

  return (
    <footer style={{ marginLeft: "-150px", marginTop: "0px", height: "10%" }}>
      <div> </div>
      <div className="content-container">
        <div className="col" style={{ marginLeft: "140px", marginTop: "80px" }}>
          <h4 style={{ fontSize: "14px" }}>Product</h4>
          <ul style={{ fontSize: "14px", width: "200%", marginTop: "15px" }}>
            <a>
              {" "}
              <li onClick={() => handleNameClick("Feature 1")}>
                City Experiences
              </li>
            </a>
            <li onClick={() => handleNameClick("Feature 2")}>Our Content</li>
            <li onClick={() => handleNameClick("Feature 3")}>City Guide</li>
            <li onClick={() => handleNameClick("Feature 3")}>Contribute</li>
          </ul>
        </div>
        <div className="col" style={{ marginTop: "80px" }}>
          <h4 style={{ fontSize: "14px" }}>Cities</h4>
          <ul style={{ fontSize: "14px", width: "200%", marginTop: "15px" }}>
            <li onClick={() => handleNameClick("City 1")}>Jaipur</li>
            <li onClick={() => handleNameClick("City 2")}>Jodhpur</li>
            <li onClick={() => handleNameClick("City 3")}>udaipur</li>
            <li onClick={() => handleNameClick("City 1")}>Ranthambore</li>
            <li onClick={() => handleNameClick("City 2")}>Jaisalmer</li>
            <li onClick={() => handleNameClick("City 3")}>Mumbai</li>
            <li onClick={() => handleNameClick("City 1")}>Bangalore</li>
          </ul>
        </div>
        <div className="col" style={{ marginTop: "80px" }}>
          <h4 style={{ fontSize: "14px" }}>Company</h4>
          <ul style={{ fontSize: "14px", width: "200%", marginTop: "15px" }}>
            <li onClick={() => handleNameClick("Country 1")}>
              About Cityscope
            </li>
            <li onClick={() => handleNameClick("Country 2")}>Careers</li>
            <li onClick={() => handleNameClick("Country 3")}>Contact us</li>
            <li onClick={() => handleNameClick("Country 1")}>Message us</li>
            <li onClick={() => handleNameClick("Country 2")}>Media kit</li>
            <li onClick={() => handleNameClick("Country 3")}>Host policy</li>
            <li onClick={() => handleNameClick("Country 1")}>Mission</li>
          </ul>
        </div>
        <div
          className="Subscribe"
          style={{ marginTop: "118px", width: "338px", height: "240px" }}
        >
          <h4 style={{ marginTop: "1px", marginLeft: "-20px" }}>Subscribe</h4>
          <form style={{ marginTop: "1px", marginLeft: "-20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  marginRight: "10px",
                  width: "40px",
                  height: "40px",
                }}
              />
              <button
                style={{
                  backgroundColor: "yellow",
                  marginTop: "-20px",
                  width: "40px",
                  height: "40px",
                }}
                type="submit"
              >
                <FaArrowRight className="button-icon" />
              </button>
            </div>
            <p style={{ padding: "1px", fontSize: "12px", marginTop: "6px" }}>
              Hello, we are ABC. trying to make an effort to put the right
              people for you to get the best results. Just insight
            </p>
          </form>
        </div>
      </div>
      {/* ------------------------- */}
      <hr style={{ marginTop: "100px" }} />
      <div className="content-container">
        <div className="CityScope_Logo">
          <h3>
            <img
              src={Yellow_CityScope_Logo}
              width="120"
              height="30"
              alt=""
              style={{ marginLeft: "145px", marginTop: "60px" }}
            />
          </h3>
        </div>
        <div className="CityScope_terms">
          <div className="col_one">
            <h6>Terms</h6>
          </div>
          <div className="col_one">
            <h6>Privacy</h6>
          </div>
          <div className="col_one">
            <h6>Cookies</h6>
          </div>
        </div>
        <div className="Social_media" style={{ marginTop: "45px" }}>
          <a>
            {" "}
            <h6>
              <Linkedin />
            </h6>
          </a>
          <a>
            <h6>
              <Twitter />
            </h6>
          </a>

          <a>
            <h6>
              <Facebook />
            </h6>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

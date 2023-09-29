import React from "react";
import { sidebar } from "../../constants/sidebar";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import CityScopeLogo from "../../assets/pngs/CityScopeLogo.png";
import { AddSign } from "../../assets/svgs";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    navigate("/" + path);
  };

  return (
    // <div className='nav' style={{"position":"fixed","width":"5%","backgroundColor":"black","height":"100vh","paddingTop":"48px"}}>

    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
      style={{
        position: "fixed",
        width: "5%",
        backgroundColor: "black",
        top: "0",
        left: "0",
        bottom: "0",
        zIndex: "10",
        height: "100vh",
        filter: "drop-shadow(0px 4px 16px rgba(133, 148, 167, 0.25))",
      }}
    >
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        {sidebar.map((item, index) => {
          let tab = (
            <div
              className="list-group list-group-flush mx-3"
              style={{
                marginTop: "62%",
                width: "47%",
                height: "32px",
              }}
              onClick={() => handleRouteChange(item.title.toLowerCase())}
            >
              <svg fill="grey" className="sidebar__menuitem">
                {item.icon}
              </svg>
            </div>
          );
          return tab;
        })}
        <div
          className="list-group list-group-flush mx-5"
          data-toggle="modal"
          data-target="#ContributorPopUp"
          style={{
            marginTop: "150%",
            width: "50%",
            height: "50px",
            alignItems: "center",
          }}
        >
          <svg
            fill="grey"
            className="sidebar__menuitem"
            style={{
              height: "100px",
              width: "100%",
              display: "block",
              marginTop: "-45px",
              marginLeft: "5px",
            }}
          >
            <AddSign />
          </svg>
        </div>
      </div>
    </nav>

    //   </div>
  );
};

export default Sidebar;

<a href="#" className="list-group-item list-group-item-action py-2 ripple">
  <i className="fas fa-lock fa-fw me-3"></i>
  <span>Password</span>
</a>;

// <div className="sidebar-component">
// <div className="sidebar-component__logo">
//  <Link to="/" > <img src={CityScopeLogo} /> </Link>
// </div>
// <div className="sidebar-component__menu">
//    {sidebar.map((item, index) => {
//        let tab = (
//            <div className='sidebar-component__menu-item' onClick={() => handleRouteChange(item.title.toLowerCase())}
//                key = {index} >
//                   <svg fill='grey' className='sidebar__menuitem' > {item.icon} </svg>
//                    <span>{item.title}</span>
//            </div>
//                                   )
//                                   return tab;})}
// </div>
// <div className='a'> <MenuIcon /> </div>
// </div>

import React from "react";
import { Route, Routes } from "react-router-dom";
import Cityguide from "../views/Cityguide";
import Experiences from "../views/Experiences";
import Home from "../views/Home";
import ExperienceDetail from "../views/ExperienceDetail";
import Careers from "../views/Careers";
import ContactUs from "../views/ContactUs";
import BookingDetails from "../views/BookingDetails";
import ArticleDetails from "../views/ArticleDetails/ArticleDetails";
import Articles from "../views/Articles/Article";
import ChannelsFilter from "../views/Articles/Filter/ChannelsFilter";
function AppRouter(props) {
  return (
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/experiences" element={<Experiences />} />
        <Route exact path="/cityguide" element={<Cityguide />} />
        <Route exact path="/experiences/:id" element={<ExperienceDetail />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/bookingdetails" element={<BookingDetails />} />
        <Route exact path="/articles/:id" element={<ArticleDetails />} />
        {/* <Route exact path="/articles" element={<Articles />} /> */}
        <Route exact path="/articles" element={<ChannelsFilter />} />

        {/* ________________________________________________________________ */}
        {/* <Route exact path="/bookingdetails" element={<BookingDetails />} /> */}
      </>
    </Routes>
  );
}

export default AppRouter;

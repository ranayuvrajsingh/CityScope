import React, { useEffect, useState } from "react";

import { fetchWeather } from "../../store/Slices/WeatherSlice";
import { useSelector, useDispatch } from "react-redux";
import "./MorningComp.scss";
import "../../styles/main.scss";

const MorningComp = (props) => {
  const name = "Citizen";
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.Weather);
  useEffect(() => {
    if (!weather || !weather.data) {
      dispatch(fetchWeather());
    }
  }, [weather, dispatch]);
  if (weather && weather.isLoading) {
    return <p>Loading...</p>;
  }

  if (weather && weather.isError) {
    return <p>Error occurred while fetching weather.</p>;
  }

  if (
    weather &&
    weather.data &&
    weather.data.data &&
    weather.data.data.length > 0
  ) {
    const weatherData = weather.data.data[0];

    return (
      <div className="morning">
        <div className="morning-title subheading-24">
          Good Morning <span className="morning-name">{name} </span>
        </div>
        <div className="morning-city-fact my-4 body-22">
          {weatherData.description}
        </div>
      </div>
    );
  }
};

export default MorningComp;

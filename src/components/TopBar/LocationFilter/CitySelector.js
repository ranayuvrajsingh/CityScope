import React, { useState, useEffect } from "react";
import { fetchCities } from "../../../store/Slices/CitiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CitySelector() {
  // State to store the selected city
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("All");
  const cities = useSelector((state) => state.Cities);

  // Event handler to update selected city
  const handleCityChange = (event) => {
    const selectedCityValue = event;

    setSelectedCity(selectedCityValue);
    window.location.reload();

    // Save selected city to local storage
    localStorage.setItem("selectedCity", selectedCityValue);
  };

  useEffect(() => {
    if (!cities || !cities.data) {
      dispatch(fetchCities());
    }
  }, [cities, dispatch]);

  useEffect(() => {
    // Retrieve selected city from local storage
    const storedSelectedCity = localStorage.getItem("selectedCity");
    if (storedSelectedCity) {
      setSelectedCity(storedSelectedCity);
    }
  }, []);

  if (cities && cities.isLoading) {
    return <p>Loading...</p>;
  }

  if (cities && cities.isError) {
    return <p>Error occurred while fetching cities.</p>;
  }

  if (
    cities &&
    cities.data &&
    cities.data.data &&
    cities.data.data.length > 0
  ) {
    const cityData = cities.data.data;

    return (
      <div className="dropdown" style={{ paddingLeft: "20px" }}>
        <div
          className="dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedCity} {/* Display the selected value */}
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {cityData.map((city, index) => (
            <a
              key={index}
              className="dropdown-item"
              href="#"
              onClick={() => handleCityChange(city.name)}
              style={{
                borderBottom:
                  index < cityData.length - 1 ? "1px solid #ccc" : "none",
                padding: "8px 16px",
              }}
            >
              {city.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default CitySelector;

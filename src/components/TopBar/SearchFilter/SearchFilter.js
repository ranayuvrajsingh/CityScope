import React, { useState, useEffect } from "react";
import { fetchCities } from "../../../store/Slices/CitiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/svgs/SearchIcon.svg";

function SearchFilter() {
  // State to store the selected city
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Whenever the query changes, perform the search and update the results
    const searchResults = performSearch(query);
    setResults(searchResults);

    // Show/hide the dropdown based on whether there are results
    // setDropdownOpen(searchResults.length > 0);
    setDropdownOpen(true);
  }, [query]);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setQuery(userInput);
  };

  const handleClearSearch = () => {
    setQuery("");
    setResults([]);
    setDropdownOpen(false);
  };

  const performSearch = (userInput) => {
    // Implement your search logic here
    // This could be an API call or filtering data locally
    // Return an array of matching results
    const list = [1, 2, 3];
    return list;
  };

  return (
    <div
      className="form-group has-search ml-3 mb-0"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
        alignItems: "center",
        width: "193px",
      }}
    >
      <a className="navbar ml-2 p-0" style={{ borderRadius: "50px" }} href="#">
        <img src={SearchIcon} width="30" height="30" alt="" />
      </a>
      <form className="form-inline">
        <input
          value={query}
          onChange={handleInputChange}
          style={{ width: "155px" }}
          className="form-control mr-sm-1"
          type="search"
          placeholder="Search Something"
          aria-label="Search "
        />
      </form>

      {isDropdownOpen && (
        <div
          className="dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {results.map((index) => (
              <a
                className="dropdown-item"
                href="#"
                // onClick={() => handleCityChange(Index)}
              >
                {index}
              </a>
            ))}

            <button onClick={handleClearSearch}>Clear Search</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;

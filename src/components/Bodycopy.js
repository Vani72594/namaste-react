import React from "react";
import RestoCards from "./RestoCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [nameOfRestList, setNameOfRestList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setNameOfRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchResult(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const filterresto = (e) => {
    e.preventDefault();
    const filterrest = nameOfRestList.filter((rest) => rest.info.avgRating > 4);
    setNameOfRestList(filterrest);
  };

  const searchResto = (e) => {
    e.preventDefault();
    const filterByName = nameOfRestList.filter((rest) =>
      rest.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterByName);
  };
  return nameOfRestList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box ">
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" id="searchclk" onClick={searchResto}>
          Search
        </button>
        <button type="button" className="rating-filter" onClick={filterresto}>
          Top Resto
        </button>
      </div>
      <div className="restoContainer">
        {searchResult.length === 0 ? (
          <p className="errorMsg">No Data Available</p>
        ) : (
          searchResult.map((item) => (
            <RestoCards resData={item} key={item.info.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

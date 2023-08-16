import React from "react";
import RestoCards, { withPromotedLabel } from "./RestoCards";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [nameOfRestList, setNameOfRestList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const userOnlineStatus = useOnlineStatus();
  const PromotedRestoCard = withPromotedLabel(RestoCards);
  console.log(PromotedRestoCard);
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
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const filterresto = (e) => {
    e.preventDefault();
    const filterrest = nameOfRestList.filter(
      (rest) => rest.info.avgRating > 4.5
    );
    console.log(filterrest);
    setSearchResult(filterrest);
  };

  const searchResto = (e) => {
    e.preventDefault();
    const filterByName = nameOfRestList.filter((rest) =>
      rest.info.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filterByName);
  };
  const { loggedInUser, setUserName } = useContext(UserContext);
  if (userOnlineStatus === false) return <h1>Please check your connection</h1>;

  return nameOfRestList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box flex mb-4 items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="search px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          id="searchclk"
          onClick={searchResto}
          className="bg-blue-900 text-white rounded-md py-2 px-4 ml-5"
        >
          Search
        </button>
        <button
          type="button"
          className="rating-filter text-white bg-green-500 rounded-md py-2 px-4 ml-5"
          onClick={filterresto}
        >
          Top Resto
        </button>
        <label htmlFor="userName" className="px-2">
          Name:{" "}
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="px-5"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="restoContainer grid grid-cols-4 gap-3">
        {searchResult.length === 0 ? (
          <p className="errorMsg">No Data Available</p>
        ) : (
          searchResult.map((item) => (
            <Link to={`/restaurants/${item.info.id}`} key={item.info.id}>
              {item.info.veg ? (
                <PromotedRestoCard resData={item} />
              ) : (
                <RestoCards resData={item} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

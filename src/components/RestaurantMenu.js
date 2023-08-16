import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";
import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restInfo.cards[0]?.card?.card?.info;
  // restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.;
  const restMenuList =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card
      .itemCards;
  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (menu) =>
        menu.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <div className="RestaurantHeader_container__2XRhv snipcss-NUKiB">
        <div className="RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK">
          <div className="RestaurantNameAddress_wrapper__24l_g">
            <div aria-hidden="true">
              <p className="RestaurantNameAddress_name__2IaTv">{name}</p>
              <p className="RestaurantNameAddress_cuisines__mBHr2">
                {cuisines.join(", ")}
              </p>
            </div>
            <div
              className="RestaurantNameAddress_areaWrapper__3HIxj"
              aria-label=""
            >
              <p
                className="RestaurantNameAddress_area__2P9ib"
                aria-hidden="true"
              >
                {areaName}
              </p>
              <p
                className="RestaurantNameAddress_lastMile__26BNf"
                aria-hidden="true"
              >
                {restInfo.cards[0]?.card?.card?.info.sla.lastMileTravelString}
              </p>
            </div>
          </div>
          <button
            className="RestaurantRatings_wrapper__2294i"
            data-testid="restaurant-ratings-header"
            aria-hidden="true"
          >
            <span
              className="RestaurantRatings_avgRating__1TOWY"
              aria-hidden="true"
            >
              <span className="icon-star">🌟</span>
              <span>{avgRating}</span>
            </span>
            <span
              className="RestaurantRatings_totalRatings__3d6Zc"
              aria-hidden="true"
            >
              {totalRatingsString}
            </span>
          </button>
        </div>
        <hr
          className="RestaurantHeader_dottedSeparator__2O2hU RestaurantHeader_marginBottom__1rbfK"
          aria-hidden="true"
        />
        <div
          className="RestaurantHeader_marginBottom__1rbfK"
          aria-hidden="true"
        >
          <ul className="RestaurantTimeCost_wrapper__3YXF9">
            <li className="RestaurantTimeCost_item__2HCUz">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  strokeWidth="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>{restInfo.cards[0]?.card?.card?.info.sla.slaString}</span>
            </li>
            <li className="RestaurantTimeCost_item__2HCUz">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>{costForTwoMessage}</span>
            </li>
          </ul>
        </div>
        <hr
          className="RestaurantHeader_dottedSeparator__2O2hU RestaurantHeader_marginBottom__1rbfK"
          aria-hidden="true"
        />
      </div>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

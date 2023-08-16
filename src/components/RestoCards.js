import React from "react";
import { CDN_URL } from "../utils/constants";
const RestoCards = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="rest-card">
      <div className="img-wraper">
        <div className="imgparent">
          <div className="img-blk">
            <img src={`${CDN_URL}/${cloudinaryImageId}`} className="resImage" />
          </div>
        </div>
      </div>
      <div className="rest-desc">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
        <p>{resData.info.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

//HigherOrder Function example
export const withPromotedLabel = (RestoCards) => {
  return (props) => {
    return (
      <>
        <label className=" absolute bg-sky-950 text-white rounded-full px-2 py-1 z-50 from-neutral-400 text-xs">
          Promoted
        </label>
        <RestoCards {...props} />
      </>
    );
  };
};

export default RestoCards;

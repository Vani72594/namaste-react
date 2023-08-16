import React from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);
  const handletoggle = () => {
    setShowIndex();
  };
  return (
    <div className="main_container__3QMrw snipcss-rQJRW px-5">
      <h3
        className="flex justify-between text-lg text-black mt-0 mb-0 px-5 py-4 border-dotted border-b-2 shadow-zinc-300 drop-shadow-lg font-semibold my-5 shadow-inner bg-gray-100 cursor-pointer"
        onClick={handletoggle}
      >
        <span aria-hidden="true">
          {data?.card.card.title} ({data?.card?.card?.itemCards.length})
        </span>
        <span>⇩</span>
      </h3>
      {showItem && (
        <div className="">
          <ItemList item={data?.card?.card?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;

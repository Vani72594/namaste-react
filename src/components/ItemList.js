import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {item.map((rest) => {
        return (
          <div key={rest.card.info.id} className="px-5 pt-5">
            <div
              className="styles_container__-kShr"
              data-testid="normal-dish-item"
            >
              <div className="styles_item__3_NEA styles_hasImage__3OsYt">
                <div className="styles_detailsContainer__22vh8">
                  <div className="styles_itemName__hLfgz" aria-hidden="true">
                    <h3 className="styles_itemNameText__3ZmZZ">
                      {rest.card.info.name}
                    </h3>
                  </div>
                  <div
                    className="styles_itemPortionContainer__1u_tj"
                    aria-hidden="true"
                  >
                    <span
                      className="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz"
                      aria-hidden="true"
                    >
                      <span className="rupee">
                        {rest.card.info.price / 100}
                      </span>
                    </span>
                  </div>
                  <div
                    className="styles_itemDesc__3vhM0 style-53rzL"
                    aria-hidden="true"
                    id="style-53rzL"
                  >
                    {rest.card.info.description}
                  </div>
                </div>
                <div className="styles_itemImageContainer__3Czsd">
                  <div aria-hidden="true">
                    <button
                      className="styles_itemImage__3CsDL style-ZMNTy"
                      aria-label="See more information about Jain Meal - McCheese Burger Veg"
                      id="style-ZMNTy"
                    >
                      <img
                        alt="Jain Meal - McCheese Burger Veg"
                        className="styles_itemImage__3CsDL"
                        loading="lazy"
                        width="256"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${rest.card.info.imageId}`}
                      />
                    </button>
                  </div>
                  <div
                    className="styles_itemAddButton__zJ7-R"
                    onClick={() => handleAddItem(rest)}
                  >
                    <div className="_3L1X9 _211P0 main_buttonInner__z6Jz0 main_button__3gpqi">
                      <div className="_1RPOp">ADD</div>
                      <div className="_3Hy2E">+</div>
                      <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                      <div className="_29Y5Z _20vNm _4aKW6"></div>
                      <div className="_2zAXs _2quy- _4aKW6">0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_divider__2JelH"></div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

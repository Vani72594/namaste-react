import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="main_container__3QMrw snipcss-rQJRW px-5">
      <h2 className="text-3xl py-5 flex items-center justify-center">
        Cart{" "}
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-red-300 text-black text-sm ml-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </h2>
      {cartItems?.length === 0 ? (
        <h1>No Items in Cart</h1>
      ) : (
        <ItemList item={cartItems} />
      )}
    </div>
  );
};

export default Carts;

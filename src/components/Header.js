import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const userOnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="header flex justify-between p-3 items-center">
      <div className="logo-container w-auto">
        <img src={LOGO_URL} alt="Namaste React Logo" className="logo h-16" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex items-center">
          <li className="px-2">
            User Status : {userOnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2">
            <Link to="/" className="no-underline font-semibold text-black">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="no-underline font-semibold text-black">
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/contact"
              className="no-underline font-semibold text-black"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/grocery"
              className="no-underline font-semibold text-black"
            >
              Grocery
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" className="no-underline font-semibold text-black">
              🛒 {cartItems.length}
            </Link>
          </li>
          <li className="px-2">
            <button
              type="button"
              className="loginbtn ring-offset-blue-400 rounded-lg font-semibold active:bg-red-400 hover:bg-rose-400 bg-rose-300 text-black px-4 py-2"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="px-2">👤 {loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

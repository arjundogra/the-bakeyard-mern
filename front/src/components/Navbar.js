import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions/actions";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <h2>THE BAKEYARD</h2>
        </div>
        <div className="navbarRight">
          <Link to="/">Home</Link>
          {/* <Link to="/gallery">Gallery</Link> */}
          <Link to="/products">Products</Link>
          {/* <Link to="/about">About</Link>
            <Link to="/gallery">Contact Us</Link> */}
          {user.loggedIn ? (
            <button className="btn" onClick={() => dispatch(logOut())}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn">
              Log In
            </Link>
          )}
          <div className="cartLogo">
            <Link to="/cart">
              <img src="./cartLogo.png" />
              <p>{cart?.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

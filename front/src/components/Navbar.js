import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../actions/actions";

const Navbar = ({ cart, userData }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  // const cart = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log("RUN", cart);
    setCartCount(cart.length);
  }, [cart, cartCount, userData]);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    history.push("/");
    window.location.reload(false);
  };
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
            // <button className="btn" onClick={() => dispatch(logOut())}>
            //   Log Out
            // </button>
            <a onClick={handleLogOut}>Log Out</a>
          ) : (
            <Link to="/login">Log In</Link>
          )}
          <div className="cartLogo">
            <Link to="/cart">
              <img src="./cartLogo.png" />
              <p>{cartCount}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    userData: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);

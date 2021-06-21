import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../actions/actions";

const Navbar = ({ cart }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  // let user = "ARJun";
  // const cart = useSelector((state) => state.cart);
  let [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    // console.log("Hello");
    cart.forEach((element) => {
      count += 1;
    });
    console.log(count);
    // setCartCount(count);
  }, [cart]);
  // useEffect(() => {
  //   console.log("HEY");
  // });

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    history.push("/");
  };
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <h2>THE BAKEYARD</h2>
        </div>
        <div className="navbarRight">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {user.loggedIn ? (
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
  };
};

export default connect(mapStateToProps, null)(Navbar);

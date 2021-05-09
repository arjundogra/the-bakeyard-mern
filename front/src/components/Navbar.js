import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbarLeft">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="navbarCenter">
          <Link to="/">
            <img src="bakeyardLogo.jpg" />
          </Link>
        </div>
        <div className="navbarRight">
          {this.props.isLoggedIn ? (
            <button onClick={this.props.handleLogOut}>Log Out</button>
          ) : (
            <Link to="/login">Log In</Link>
          )}
          <div>Cart</div>
        </div>
      </div>
    );
  }
}

export default Navbar;

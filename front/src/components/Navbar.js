import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollVal = window.scrollY;
      if (scrollVal > 80) {
        this.setState({ onTop: false });
        console.log(this.state);
      } else {
        this.setState({ onTop: true });
        console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div className={this.state.onTop ? "navbar" : "navbar scroll"}>
        <div className="navbarContainer">
          <div className="navbarLeft">
            <h2>THE BAKEYARD</h2>
          </div>
          <div className="navbarRight">
            <Link to="/">Home</Link>
            {/* <Link to="/gallery">Gallery</Link> */}
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Contact Us</Link>
            {this.props.isLoggedIn ? (
              <button onClick={this.props.handleLogOut}>Log Out</button>
            ) : (
              <Link to="/login">Log In</Link>
            )}
            <div className="cartLogo">
              <img src="./cartLogo.png" />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoggedIn: false,
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentDidMount() {
    axios
      .get("/users", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((r) => {
        console.log(r);
        this.setState({
          user: r.data,
          isLoggedIn: true,
        });
      })
      .catch((e) => console.log(e));
  }

  handleLogIn = (data) => {
    console.log(data, "APP ");
    this.setState({
      user: data,
      isLoggedIn: true,
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("token");
    this.setState({
      user: null,
      isLoggedIn: false,
    });
    console.log("Log Out Run");
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            handleLogOut={this.handleLogOut}
          />
          <Switch>
            <Route path="/login">
              <Login handleLogIn={this.handleLogIn} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home isLoggedIn={this.state.isLoggedIn} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

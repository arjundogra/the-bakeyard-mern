import logo from "./logo.svg";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {user :null};
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
        });
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home user={this.state.user}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

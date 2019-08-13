import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login, Player } from "./screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";


function App() {
  const [token, setToken] = useState("");

  const setTokent = () => {
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken(token);
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Player} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login, Player } from "./screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
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

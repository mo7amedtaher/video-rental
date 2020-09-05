import React from "react";

import "./App.css";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route exaxt path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movies from "./components/movies";
import "./App.css";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rental" component={Rentals} />
        <Route path="/notFound" component={NotFound} />
      </main>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Products from "./components/products/Products";
import ProductItem from "./components/products/ProductItem";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products/:id" component={ProductItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

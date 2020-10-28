import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import contact from "./pages/contact";
import Modal from "./components/Buttons/Modal";
import About from "./pages/About";
import Buttons from "./components/Buttons";
import portfolio from "./pages/portfolio";

import "./pages/style.css";

function App() {
  return (
    <Router>
      <div>
        <Buttons />
        <Modal />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/portfolio" component={portfolio} />
      </div>
    </Router>
  );
}

export default App;

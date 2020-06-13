import React from "react";
import ReactDOM from "react-dom";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./css/index.scss";

import Menu from "./shared_components/Menu";
import Motivation from "./motivation/Motivation";
import KnowledgeMap from "./knowledge_map/KnowledgeMap";
import About from "./about/About";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Menu />

    {/* Use react-router to render the correct page component */}
    <Switch>
      <Route exact path="/">
        <KnowledgeMap />
      </Route>
      <Route path="/motivation">
        <Motivation />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import About from "./About";
import ProjectsWrapper from "./ProjectsWrapper";
import Resume from "./Resume";
import Contact from "./Contact";
import SortsWrapper from "./SortsWrapper";
import Places from "./Places";

const Router = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/projects" component={ProjectsWrapper} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sorting" component={SortsWrapper} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/about" component={About} />
        <Route exact path="/index" component={About} />
        <Route exact path="/index.html" component={About} />
        <Route exact path="/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Router;

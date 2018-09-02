import React from "react";
import { HashRouter as Router, Switch, Route, } from "react-router-dom";

import Header from "../Header";
import Home from "../../containers/Home";
import Category from "../../containers/Category";

const NotFound = () => <h1>404</h1>;

const router = [
  {
    id: 1,
    url: "/",
    comp: Home,
    exact: true,
  },
  {
    id: 2,
    url: "/category/:category",
    comp: Category,
    exact: true,
  },
];

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        {
          router.map(route => (
            <Route key={route.id} path={route.url} exact={route.exact} component={route.comp} />
          ))
        }
        <Route path="*" component={NotFound} /> 
      </Switch>
    </div>
  </Router>
);

export default App;
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, } from "react-router-dom";

import News from "./containers/News";
import Header from "./components/Header";
//import App from "./components/App"
//import { routersSettings, NotFound, } from "./routers";

const Home = () => <h1>Home</h1>;
const Topics = () => <h1>Topics</h1>;
const NotFound = () => <h1>404</h1>;

const routersSettings = [
  {
    id: 1,
    url: "/",
    component: Home,
    exact: true,
  },
  {
    id: 2,
    url: "/news",
    component: News,
    exact: true,
  },
  {
    id: 3,
    url: "/news/:newsId",
    component: News,
    exact: false,
  },
  {
    id: 4,
    url: "/topics",
    component: Topics,
    exact: false,
  },
];

// Работаем с роутером и api:

// На главной странице:

// меню из категорий для шуток (апи1)
// рандомная шутка (апи2)
// На странице категории:

// меню из категорий для шуток (апи1)
// рандомная шутка по категории (апи3)
// Меню одно и то же.

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        {
          routersSettings.map(route => (
            <Route key={route.id} path={route.url} exact={route.exact} component={route.component} />
          ))
        }
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <App /> */}
    </div>
  </Router>,
  document.getElementById("app")
);
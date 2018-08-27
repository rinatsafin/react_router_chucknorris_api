import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header';
import App from "./components/App";
import routerSettings from "./router";

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
      <App />
    </div>
  </Router>,
  document.getElementById("app")
);
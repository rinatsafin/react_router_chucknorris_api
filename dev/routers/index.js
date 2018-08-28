import React from "react";

const Home = () => <h1>Home</h1>;
const News = () => <h1>News</h1>;
const Topics = () => <h1>Topics</h1>;

export const NotFound = () => (
  <h1>404</h1>
);

export const routersSettings = [
  {
    url: "/",
    component: Home,
    exact: true,
  },
  {
    url: "/news",
    component: News,
    exact: true,
  },
  {
    url: "/news/:newsId",
    component: News,
    exact: false,
  },
  {
    url: "/topics",
    component: Topics,
    exact: false,
  },
];
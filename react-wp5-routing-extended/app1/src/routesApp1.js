import React from "react";

//  uncomment this line and an object down below to expose a new module to the Root App
//  reload dev server or build/serve new remoteEntry.js
//  reload root App to see new link

// const SingleMeal = React.lazy(() => import("./components/SingleMeal.jsx"));
const Mealplan = React.lazy(() => import("./components/Mealplan.jsx"));
const Workouts = React.lazy(() => import("./components/Workouts.jsx"));


const routesApp1 = [
  {
    path: "/mealplan",
    element: <Mealplan />,
    name: 'Mealplan',
  },
  {
    path: "/workouts",
    element: <Workouts />,
    name: 'Workouts',
  },
  // {
  //   path: "/single-meal",
  //   element: <SingleMeal />,
  //   name: 'Single meal (New)',
  // },
];

export default routesApp1;

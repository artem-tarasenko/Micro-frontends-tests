import React from "react";
import DemoComponent from "./DemoComponent.jsx";

const Form = React.lazy(() => import("./Form"));
const Settings = React.lazy(() => import("./Settings.jsx"));

const routesApp2 = [
  {
    path: "form",
    element: <Form />,
    name: 'Form page',
  },
  {
    path: "settings",
    element: <Settings />,
    name: 'Settings page',
    subroutes: [
      {
      path: "user-page",
      element: <DemoComponent text='User info page' />,
      name: 'User info',
      },
      {
        path: "system",
        element: <DemoComponent text='System settings page' />,
        name: 'User info',
      }
    ],
  }
];

export default routesApp2;

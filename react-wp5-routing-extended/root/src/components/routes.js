import React from "react";
import { Link } from 'react-router-dom';
import MainContent from './MainContent.jsx';

import routesApp1 from 'app1/routesApp1';
import routesApp2 from 'app2/routesApp2';

const combinedRoutes = [
    {
        path: '/',
        element: <MainContent />,
        name: 'Home',
    },
    {
        path: '*',
        hidden: true,
        element: <NotFount />,
        name: 'Not found',
    },
    ...routesApp1, 
    ...routesApp2
];

function NotFount() {
    return (
        <div>
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </div>
      );
}


export default combinedRoutes;

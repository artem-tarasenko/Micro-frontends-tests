import React from 'react';
import { Route } from 'react-router-dom';

function registerRoute(route) {
    if(!route.subroutes) return <Route key={route.path} {...route} />

    const subroutesArray = route.subroutes.map( subroute => registerRoute(subroute));
    return (
        <Route key={route.path} path={route.path} element={route.element} >
            {subroutesArray}
        </Route>
    )
}

export { registerRoute };
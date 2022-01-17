import React from "react";
import { Outlet, Link } from 'react-router-dom';
import routesApp2 from "./routesApp2";


export default function Layout( {isSuspensed} ) {
    return (
        <div>
            <h1>React app #2</h1>
            <hr />
            <p>Exposed modules</p>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {
                    routesApp2.map( route => (
                        <li key={route.path} >
                            <Link to={route.path} >{route.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="content">
                { isSuspensed 
                    ? <p>Loading...</p>
                    : <Outlet />
                }
            </div>
        </div>
    )
}
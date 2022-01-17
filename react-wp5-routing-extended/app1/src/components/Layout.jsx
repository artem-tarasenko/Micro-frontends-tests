import React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <h1>React app #1</h1>
            <h3>Date : {new Date().toDateString()}</h3>
            <hr />
            <p>Exposed modules</p>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/mealplan'>Mealplan page</Link></li>
                <li><Link to='/workouts'>Workouts page</Link></li>
            </ul>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
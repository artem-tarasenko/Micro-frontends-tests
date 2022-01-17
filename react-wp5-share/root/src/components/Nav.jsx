import React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

export default function Nav() {


    return (
        <div className="rootnav">
            <h3 className="rootnav-title">Navigation</h3>
            <div className="rootnav-list">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/counter">Counter app1</NavLink>
                <NavLink to="/change-counter">Change counter app2</NavLink>
            </div>
        </div>
    )
}

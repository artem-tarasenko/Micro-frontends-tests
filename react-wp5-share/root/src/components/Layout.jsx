import React from "react";
import { Outlet } from "react-router-dom";

import { RecoilRoot } from 'counter/recoil';

import Nav from "./Nav";
import RecoilState from "./RecoilState";

export default function Layout() {
    return (
        <RecoilRoot>
            <div className="wrapper">
                <pre>react-root@app.js</pre>
                <div className="header">
                    <h2>React-root app</h2>
                    <AuthStatus />
                </div>
                <RecoilState />
                <div className="main">
                    <Nav />
                    <div className="section">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </RecoilRoot>
    )
}
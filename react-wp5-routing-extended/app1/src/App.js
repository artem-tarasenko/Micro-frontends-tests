import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

import routes from "./routesApp1";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={ <StartingPage /> } />
                        {routes.map((route) => (
                            <Route {...route} />
                        ))}
                    </Route>
                </Routes>

            </React.Suspense>
        </BrowserRouter>
    )
}

function StartingPage() {
    return (
        <>
            <p>Home page</p>
            <p>This component has a basic setup</p>
            <p>The only puprose is to expose several components.</p>
        </>
    )
}

export default App
import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

import DemoComponent from "./components/DemoComponent.jsx";
import Layout from "./components/Layout.jsx";
import routes from "./components/routesApp2";
import { registerRoute } from './utils/routing';
 

function App() {

    return (
        <BrowserRouter>
            <React.Suspense fallback={ <Layout isSuspensed />}>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={ <DemoComponent text='Home page content' /> } />
                        {
                            routes.map( (route) => registerRoute(route) )
                        }
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}





export default App
import React from "react"
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { registerRoute } from "./utils/routing";
import combinedRoutes from "./components/routes";
import Layout from './components/Layout.jsx';
import MainContent from "./components/MainContent.jsx";

//TODO: Sort out why jsx is not exported automatically

function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={ <Layout isSuspensed />}>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={ <MainContent /> } />
                        {
                            combinedRoutes.map( (route) => registerRoute(route) )
                        }
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
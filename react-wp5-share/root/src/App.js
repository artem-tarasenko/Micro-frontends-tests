import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RecoilRoot } from 'counter/recoil';

import "./styles/index.scss";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import LoginPage from "./components/Login";
import { AuthProvider } from "./auth/context";
// import Nav from "./components/Nav";
// import RecoilState from "./components/RecoilState";

const Counter = React.lazy( () => import('counter/CharacterCounter'))
const ChangeCounter = React.lazy( () => import('consumer/changeCounter'))




function App() {
    return (
        <AuthProvider>
            <React.Suspense fallback={<>Loading...</>} >
                <BrowserRouter>
                    <Routes >
                        <Route path="/" element={<Layout />} >
                            <Route index element={ <Homepage /> } />
                            <Route path="/counter" element={ <Counter />} />
                            <Route path="/change-counter" element={ <ChangeCounter />} />
                        </Route>
                        <Route path="/login" element={ <LoginPage />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        </AuthProvider>
    )
}



export default App
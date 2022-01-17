import React from "libs/react"
import Settings from "./components/Settings.jsx";
import { BrowserRouter } from "libs/react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <div>
            <h1>Userinfo React App</h1>
            <Settings />
        </div>
    </BrowserRouter>
    )
}

export default App
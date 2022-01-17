import React from "libs/react"
import Wp from "./components/Wp.jsx";
import ErrorBoundry from "./components/ErrorBoundry.js";

function App() {
    return (
        <ErrorBoundry>
        <div>
            <h1>Workouts page app</h1>
            <Wp />
        </div>
        </ErrorBoundry>
    )
}

export default App
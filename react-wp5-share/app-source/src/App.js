import React from "react";
import { RecoilRoot } from 'recoil';

import CharacterCounter from "./components/CharacterCounter";


//TODO: Add resolver to all projects (for jsx) and remove extension from imports


function App() {
    return (
        <RecoilRoot>
            <div className="container w400">
                <h1>Recoil state app</h1>
                <hr />
                <CharacterCounter />
            </div>
        </RecoilRoot>
    )
}

export default App
export { CharacterCounter };
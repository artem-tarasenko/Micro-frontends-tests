import React from "react";
import { RecoilRoot } from 'counter/recoil';

import ChangeCounter from "./components/ChangeCounter";

const Counter = React.lazy( () => import('counter/CharacterCounter'))

function App() {
    return (
        <RecoilRoot>
            <div className="container">
                <h1>Consumer React App</h1>
                <div className="remote">
                    <pre>app-source@CharacterCounter</pre>
                    <React.Suspense fallback="loading...">
                        <Counter />
                    </React.Suspense>
                </div>
                <div  style={{margin: '1rem', padding: '1rem'}}>
                    <ChangeCounter />
                </div>
                
            </div>
        </RecoilRoot>
    )
}

export default App
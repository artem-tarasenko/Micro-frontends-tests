import React from "react";

import { useRecoilState } from 'counter/recoil';
import { textState } from 'counter/textState';

function RecoilState() {
    const [state, setState] = useRecoilState(textState);

    return ( <>
        <div className="store">
            <pre>app-source@CharacterCounter (http://localhost:3001)</pre>
            <div>
                <p>STORE (Recoil.js):</p>
                <p>State: {state}</p>
            </div>
        </div>
        </>
    )
}

export default RecoilState;
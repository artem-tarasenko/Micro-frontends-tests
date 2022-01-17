import React, { useRef } from "react";

import { useRecoilState } from 'counter/recoil';
import { textState } from 'counter/textState';

import './../styles.scss';

export default function ChangeCounter() {
    const [text, setText] = useRecoilState(textState);
    const inputElement = useRef(null);

    function setLocalText( ) {
        setText(inputElement.current.value);
        console.log("text: ", inputElement.current.value);
    }

    return (
        <div className="container component">
            <h3>Local consumer component</h3>
            <p>With this input "recoil state" text can be changed</p>
            <div>
                <input ref={inputElement} />
                <button onClick={setLocalText}>Count local text</button>
            </div>
        </div>
    )
}

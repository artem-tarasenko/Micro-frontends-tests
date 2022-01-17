import React from "react";
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import './../styles.scss';


export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});


export default function CharacterCounter() {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="w400">
            <div className="container state">
                <h3>Recoil state</h3>
                <div className="state">
                    <div>
                        <p><b>textState:</b></p>
                        <p>{text ? text : '---'}</p>
                    </div>
                    <div>
                        <p><b>charCountState:</b></p>
                        <p>{count}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="info">
                    <h3>Info</h3>
                    <p>Counter app is loaded from the Source app, it saves text and counts characters in it.</p>
                    <p>This is a source of State and Recoil lib.</p>
                    <p>On change of input, it's value is being saved to the "textValue" state</p>
                    <p>"charCountState" state's value generates from the "textValue"</p>
                    <p>This block also show overlapping of css styles (class="container")</p>
                </div>
                <div className="module">
                    <p>Write some text and see the input</p>
                    <input type="text" value={text} onChange={onChange} />
                    <br />
                    <p>Echo (component state): {text}</p>
                    <CharacterCount />
                </div>
            </div>
        </div>
    );
}



function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <p>Character Count: {count}</p>;
}
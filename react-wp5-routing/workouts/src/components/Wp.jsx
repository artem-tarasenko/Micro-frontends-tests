import React from "react";
import styled from 'libs/styled-components';

const Wrapper = styled.div`
    margin: 0.5rem; 
    padding: 0.5rem;
    border: 2px dashed blue;
    font-family: 'Segoe UI';

    button {
        margin: 5px 10px;
        padding: 5px 10px;
        background-color: #c3e2e9;
        border: none;
        border-radius: 3px;
        text-transform: uppercase;

        &:hover {
            background-color: #73e2e9;
    }
`

export default function Wp() {

    return (
        <Wrapper className="workout-program">
            <h3>Workout programs heading - Mock page</h3>
            <p>Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Commodo elit at imperdiet 
                dui accumsan sit amet nulla. At erat pellentesque adipiscing commodo. Nunc non blandit 
                massa enim. Sit amet dictum sit amet justo donec enim diam. 
            </p>
            <button>Button 1</button>
            <button>Button 2</button>
        </Wrapper>
    )
}
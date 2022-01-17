import React from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import styled from 'styled-components';

const Container = styled.div`
    border: 2px dotted green;
    margin: 1rem;
    padding: 1rem;
    font-family: 'Segoe UI', 'Arial', sans;
`

function Dumb() {

    return (
        <Container>
            <h3>React standalone dumb component</h3>
            <h3>Date : {new Date().toDateString()}</h3>
            <p>Some content goes here...</p>
        </Container>
    )
}

const formLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Dumb
})

// Single SPA methods
const bootstrap = formLifecycles.bootstrap;
const mount = formLifecycles.mount;
const unmount = formLifecycles.unmount;

export {bootstrap, mount, unmount, Dumb};
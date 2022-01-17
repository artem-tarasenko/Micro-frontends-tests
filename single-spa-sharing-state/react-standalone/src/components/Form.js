import React, { useState } from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import styled from 'styled-components';

//styles are not easily transferred to a root component
const Container = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 2px dotted violet;
    background-color: rgb(184, 224, 250 / 30%);
    font-family: 'Segoe UI', 'Arial', sans;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;

    & > li {
        margin: 5px;
    }
`;

function Form() {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState(['default'])

    return (
        <Container>
            <h2>Simpe Form component</h2>
            <p>Date : {new Date().toDateString()}</p>
            <hr />
            <List>
                {
                    todoList.map( todo => <li>{todo}</li>)
                }
            </List>
            <input type="todo" placeholder="Add todo" onChange={ e => setTodo(e.target.value)} value={todo}/>
            <button onClick={ (e) => {setTodoList( (prevArr) => [...prevArr, todo]); setTodo('')}}>Submit</button>
        </Container>
    )
}


const formLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Form
})

// Single SPA methods
const bootstrap = formLifecycles.bootstrap;
const mount = formLifecycles.mount;
const unmount = formLifecycles.unmount;

export {bootstrap, mount, unmount, Form};

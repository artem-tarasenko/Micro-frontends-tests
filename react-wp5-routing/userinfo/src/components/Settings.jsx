import React from "libs/react";
import styled from 'libs/styled-components';
import { NavLink } from "libs/react-router-dom";

// import Profile from './Profile.jsx';

const Wrapper = styled.div`
margin: 0.5rem; 
padding: 0.5rem;
border: 2px dashed blue;
font-family: "Segoe UI";
`
const HorizontalMenu = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 2rem;
    background-color: #c1dae3;
    text-transform: uppercase;
    font-family: 'Segoe UI';
    margin: 0;
    padding: 5px 0;

    li {
        list-style-type: none;
        padding: 10px 15px;

        a {
            text-decoration: none;
        }

        &:hover {
            background-color: #a5d3e1;
        }
    }
`

export default function Settings() {

    return(
        <Wrapper>
            <h4>Settings app - Submenu test</h4>
            <hr />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            <div className="submenu">
                <HorizontalMenu>
                    <li><NavLink to='profile'>Profile</NavLink></li>
                    <li><NavLink to='submenu1'>Menu2</NavLink></li>
                    <li><NavLink to='submenu2'>Menu3</NavLink></li>
                </HorizontalMenu>
            </div>
        </Wrapper>
    )
}
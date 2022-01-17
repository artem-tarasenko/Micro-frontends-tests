import React from 'react';
import { Link } from "react-router-dom";
import { Title, Nav } from '../utils/styled';
import combinedRoutes from "./routes";


export default function Menu() {

    return (
        <Nav>
            <Title small >Combined navigation</Title>
            <ul>
            {
                combinedRoutes.map( route => route.hidden
                    ? ''
                    : (
                        <li key={route.path} >
                            <Link   Link to={route.path} >{route.name}</Link>
                        </li>
                    ) 
                )
            }
            </ul>
        </Nav>
    )
}
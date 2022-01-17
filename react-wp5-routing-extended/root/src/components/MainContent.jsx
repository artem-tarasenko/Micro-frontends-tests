import React from "react";
import styled from 'styled-components';

const Label = styled.h3`
    font-size: 1rem;
    font-family: 'Segoe UI';
    color: #9494a7;
    font-weight: 200;
    margin: 5px;
`
const Section = styled.div`
    font-family: 'segoe ui';
    margin: 1rem;
    p {
        
    }
`

export default function MainContent() {

    return (
        <Section>
            <Label>Root@Main Content</Label>
            <p>All menu links load remote React applications via Webpack5 Module Federation plugin.</p>
            <p>The whole navigation is made in a @root app with routing library</p>
            <p>Routing lib generates links and register routes based on the information shared by MFEs</p>
            <p>Each MFE expose an object that contains all the info required to render/register a route: path, name, element to render.</p>
            <p>@Root app combines all exposed objects with that data and use it for routing.</p>
            <p>Navigation allows to have subroutes in components.</p>
            <p>For instance, Settings page has submenu, routes for that menu added to the object with routes exposed by App2 (where Settings module is located) as a "subroutes".</p>
            <p>@Root app register all subroutes from shared "routes". Links, however, handled by the parent module - Settings</p>
            <p>So, to add a new page/compoennt to the @root app, we need to create React app, add module, create routes file and expose it.</p>
            <p>If that new module must have internal navigation (which would be subroutes for @root app) it must contain links and add info and add info about subroutes to exposed routes.js file. </p>
        </Section>
    )
}
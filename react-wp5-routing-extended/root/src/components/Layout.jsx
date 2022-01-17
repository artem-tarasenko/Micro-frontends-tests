import React from "react";
import { Outlet } from 'react-router-dom'
import { Main, ModuleName, Title, Wrapper, Section, Header } from '../utils/styled';
import Menu from "./Menu.jsx";


export default function Layout( {isSuspensed} ) {
    return (
        <Main>
            <Header borderBottom >
                <ModuleName>@react-root</ModuleName>
                <Title>React root app</Title>
            </Header>
            <Wrapper>
                <Menu />
                <Section>
                    { isSuspensed 
                        ? <p>Loading...</p>
                        : <Outlet />
                    }
                </Section>
            </Wrapper>
        </Main>
    )
}

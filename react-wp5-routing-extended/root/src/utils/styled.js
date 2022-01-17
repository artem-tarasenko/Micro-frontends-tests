import React from "react";
import styled from "styled-components";

export const Main = styled.div`
    border: 1px solid #d4d9dd;
    width: 700px;
    margin: 3rem auto;
    padding: 1rem;
    background-color: #ebeced;
    box-shadow: 3px 3px 5px #cfcfcf;
    border-radius: 5px;
    height: 85vh;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    border-bottom: ${props => props.borderBottom ? '1px solid #cbcbcb' : 'none'}
`

export const ModuleName = styled.h3`
    font-size: 1rem;
    font-family: 'Segoe UI';
    color: #9494a7;
    font-weight: 200;
    margin: 5px;
`

export const Title = styled.h2`
    color: #526883;
    margin: 0.5rem 0 1rem;
    font-family: 'segoe ui';
    text-transform: uppercase;
    font-size: ${ props => props.small ? '16px' : '24px' };
    font-weight: ${ props => props.small ? '400' : '600' };
`

export const Wrapper = styled.div`
    display: flex;
    flex-grow: 2;
`

export const Nav = styled.nav`
    ul {
        padding: 0;
        font-family: 'segoe ui';
        margin: 1rem;
        width: 200px;
    
        li {
            list-style-type: none;
    
            a {
                text-decoration: none;
                text-transform: uppercase;
                width: 100%;
                padding: 0.5rem;
                display: inline-block;
            }

            a:active {
                color: #5b94c5;
            }
        }
    
        li:hover {
            background-color: #d7d7d7;
            transition: all 300ms ease;
        }
    }
    
`

export const Section = styled.div`
    width: 100%;
    background-color: #f7f7f7;
    padding: 0.5rem;

    > p {
        margin: 5px 0;
    }
`
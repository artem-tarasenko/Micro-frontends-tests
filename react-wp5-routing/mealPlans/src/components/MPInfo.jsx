import React from "libs/react";
import styled from 'libs/styled-components';

const Wrapper = styled.div`
margin: 0.5rem; 
padding: 0.5rem;
border: 2px dashed blue;
`

const Meals = styled.div`
    display: flex;
`

const Meal = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #e5e5e5;
    box-shadow: 2px 2px 4px #e5e5e5;
    font-family: 'Segoe UI';

    p {
        margin: 5px 0;
        padding: 0;
    }
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
    }
`

export default function MPInfo() {
    return (
        <Wrapper className="mp-info">
            <h3>Your personalized meal plan - Mock page</h3>
            <Meals>
                <Meal>
                    <p>21/10</p>
                    <h4>Demo dish</h4>
                    <p>Yummy!</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Button</button>
                    <button>Button</button>
                </Meal>
                <Meal>
                    <p>22/10</p>
                    <h4>Another demo dish</h4>
                    <p>Yummy!</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Button</button>
                    <button>Button</button>
                </Meal>
            </Meals>
        </Wrapper>
    )
}
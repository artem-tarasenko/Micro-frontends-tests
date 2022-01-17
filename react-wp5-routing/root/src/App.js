import React from "libs/react";
import styled from 'libs/styled-components';
import { BrowserRouter, NavLink, Routes, Route } from "libs/react-router-dom";

import ErrorBoundry from './components/ErrorBoundry.js';
import Workouts from './components/Workouts.jsx';
import MealPlans from './components/MealPlans.jsx';
import Userinfo from './components/Userinfo.jsx';
import Dashboard from './components/Dashboard.jsx';

const RemoteProfile = React.lazy( () => import('userinfo/Profile'));
const RemoteSubpage = React.lazy( () => import('userinfo/Subpage'));


const Container = styled.div`
    margin: 2rem auto;
    padding: 2rem;
    width: 750px;
    border: 1px solid ${ props => props.shadow ? '#f7f3f3' : '#dddcdc'}; ;
    box-shadow: ${ props => props.shadow ? `8px 9px 21px rgb(128 128 128 / 30%)` : 'none'};
    border-radius: ${ props => props.round ? `10px` : '2px'};
}
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    background-color: #ebebeb;
    height: 100%;

    p {
        padding: 0.5rem;
    }

    > a {
        font-family: 'Segoe', 'Arial';
        color: black;
        list-style-type: none;
        text-decoration: none;
        padding: 0.5rem;
        text-transform: uppercase;
    }

    a.active {
        background-color: #b2d2e9;
    }
`;

function App() {
    return (
        <BrowserRouter>
            <Container shadow round>
                <h1>React Root application</h1>
                <div style={{display: 'flex', border: '1px solid #dddcdc', minHeight: '600px'}}>
                    <div className="nav">
                        <NavList>
                            <p>Root app menu</p>
                            <NavLink to='/' >Dashboard</NavLink>
                            <NavLink to='userinfo' >User info</NavLink>
                            <NavLink to='mealplans' >Meal Plans</NavLink>
                            <NavLink to='workouts' >Workouts</NavLink>
                        </NavList>
                    </div>

                    <section style={{width: '100%'}}>
                        <ErrorBoundry>
                            <React.Suspense fallback="Loading remote...">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="userinfo" element={<Userinfo />} />
                                    <Route path="userinfo/profile" element={<RemoteProfile />} />
                                    <Route path="userinfo/submenu1" element={<RemoteSubpage text='Subpage 1' />} />
                                    <Route path="userinfo/submenu2" element={<RemoteSubpage text='Subpage 2' />} />
                                    <Route path="mealplans" element={<MealPlans />} />
                                    <Route path="workouts" element={<Workouts />} />
                                </Routes>
                            </React.Suspense>
                        </ErrorBoundry>
                    </section>
                </div>
            </Container>
        </BrowserRouter>
    )
}

export default App
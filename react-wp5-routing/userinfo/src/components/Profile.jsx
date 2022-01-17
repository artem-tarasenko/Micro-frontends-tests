import React from "libs/react";
import styled from 'libs/styled-components';

const Wrapper = styled.div`
margin: 0.5rem; 
padding: 0.5rem;
border: 2px dashed blue;
font-family: "Segoe UI";
`

export default function Profile() {

    return(
        <Wrapper>
            <h3>@userinfo/Profile module</h3>
            <p>User profile</p>
            <p>Some form or other content</p>

            <hr />
            <p>Navigation to this module is done with links from remote "Settings" module, however module's route is in the root app</p>
        </Wrapper>
    )
}
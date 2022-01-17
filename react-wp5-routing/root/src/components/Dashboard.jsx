import React from "libs/react";
import styled from "libs/styled-components";

const Section = styled.section`
    margin: 1rem;
`

const H3 = styled.h3`
    font-family: "Segoe UI", "Arial", sans;
    margin: rem 0;
`

const Note = styled.div`
    font-family: "Segoe UI", "Arial", sans;
    margin: 0.5rem 0;

    h5, p {
        margin: 0;
        padding: 0;
    }

    h5 {
        color: #57638f;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
`

export default function Dashboard() {

    return (
        <Section>
            <H3>Dashboard page</H3>
            <hr />
            <p>This is a page from the root application, just as sidebar navigation</p>
            <p>Microfrontends Apps connected to Root app are marked with blue dashed border</p>
            <div style={{height: '40px', width: '120px', border: '2px dashed blue', padding: '1rem'}}>APP</div>
            <hr />
            <H3>Styling applications</H3>

            <Note>
                <h5>SCSS</h5>
                <p>To check...</p>
            </Note>

            <Note>
                <h5>CSS Modules</h5>
                <p>To check...</p>
            </Note>

            <Note>
                <h5>Styled components</h5>

                <p>Styled components must be of the same origin as "react-dom" or it will throw error about invalid hooks usage</p>
                <p>Install styled-components in a shared module, import by all modules where it's needed.</p>
            </Note>
            
        </Section>
    );
}
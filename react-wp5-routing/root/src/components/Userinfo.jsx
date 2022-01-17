import React from 'libs/react';
import styled from 'libs/styled-components';

const RemoteSettings = React.lazy( () => import('userinfo/Settings'));

const Section = styled.section`
    margin: 1rem;
    font-family: "Segoe UI";
`

export default function Userinfo() {

    return (
        <Section>
            <h3>Userinfo page</h3>
            <hr />
            <React.Suspense fallback="Loading MFE App">
                <RemoteSettings />
            </React.Suspense>
        </Section>
    )
}
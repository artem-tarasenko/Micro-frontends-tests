import React from 'libs/react';
import styled from 'libs/styled-components';

const RemoteWorkoutsApp = React.lazy( () => import('workouts/Wp'));

const Section = styled.section`
    margin: 1rem;
`

export default function Workouts() {

    return (
        <Section>
            <h3>Workouts page</h3>
            <hr />

            <React.Suspense fallback="Loading MFE App">
                <RemoteWorkoutsApp />
            </React.Suspense>
            
        </Section>
    )
}
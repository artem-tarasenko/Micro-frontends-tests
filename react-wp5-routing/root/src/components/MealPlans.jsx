import React from 'libs/react';
import styled from 'libs/styled-components';

const RemoteMealplanApp = React.lazy( () => import('mealplan/MPInfo'));

const Section = styled.section`
    margin: 1rem;
    font-family: "Segoe UI";
`

export default function MealPlans() {

    return (
        <Section>
            <h3>Meal plans page</h3>
            <hr />
            <React.Suspense fallback="Loading MFE App">
                <RemoteMealplanApp />
            </React.Suspense>
        </Section>
    )
}
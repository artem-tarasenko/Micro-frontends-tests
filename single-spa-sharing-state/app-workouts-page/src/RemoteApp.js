import React from 'react';
import { ErrorBoundary } from './error';
// import Reactstandalone from 'Reactstandalone'

const RemoteButton = React.lazy(() => import("app2/Button"));

function RemoteApp() {

    return (
        <ErrorBoundary message="Failed to load remove app.">
            <React.Suspense fallback="Loading remote form component">
                <RemoteButton />
            </React.Suspense>
        </ErrorBoundary>
    )
}

export default RemoteApp;
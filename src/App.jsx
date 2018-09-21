import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    return (
        <div>
            <p>react boilter plate without create react app.</p>
            <ErrorBoundary>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
};

export default App;

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

const PublicRoute = ({ isAuthenticated, isLoading, ...props }) => {
    if (isLoading) {
        return <Dimmer active>
            <Loader content="Loading..." />
        </Dimmer>;
    }
    if (!isLoading && isAuthenticated) {
        return <Redirect to="/settings" />

    }
    return <Route {...props} />;
};

export default PublicRoute;

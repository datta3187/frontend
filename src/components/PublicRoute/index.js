import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

const PublicRoute = ({ isAuthenticated, isLoading, ...props }) => {
    debugger
    if (isLoading) {
        return <Dimmer active>
            <Loader content="Loading..." />
        </Dimmer>;
    }

    if (!isLoading && isAuthenticated) {
        debugger
        // return <Redirect to="/login" />;
        // useHistory.goBack();

    }
    return <Route {...props} />;
};

export default PublicRoute;

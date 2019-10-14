import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';


const PrivateRoute = ({ isAuthenticated, isLoading, ...props }) => {
    debugger
    if (isLoading) {
        return <Dimmer active>
            <Loader content="Loading..." />
        </Dimmer>;
    }

    if (!isLoading && !isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return <Route {...props} />;
};

export default PrivateRoute;

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    let user = rest.location.user;
    return (
        <Route
            {...rest}
            render={() => {
                if(user) return children;
                return <Redirect to={{ pathname: "/" }} />
            }}
        >

        </Route>
    )
}

export default PrivateRoute;
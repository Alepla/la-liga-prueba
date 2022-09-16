import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/authenticationService';

export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

/**
 * With this component we verify that the user is logged in, if so he is redirected to the view specified previously in the App.* tsx and if this is not the case he is sent back to /login
 * @param {string} authenticationPath
 * @param {Object} outlet
 * @returns
 */

export const ProtectedRoute = ({ authenticationPath, outlet }: ProtectedRouteProps) => {
    if (isAuthenticated()) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};

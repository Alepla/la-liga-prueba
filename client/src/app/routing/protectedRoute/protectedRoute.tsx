import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authenticationService';

export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

/**
 *
 * @param {string} authenticationPath
 * @param {Object} outlet
 * @returns With this component we verify that the user is logged in, if so he is redirected to the view specified previously * in the App.tsx and if this is not the case he is sent back to /login
 */

export const ProtectedRoute = ({ authenticationPath, outlet }: ProtectedRouteProps): JSX.Element => {
    if (isAuthenticated()) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};

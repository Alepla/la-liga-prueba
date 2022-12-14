import React, { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { NavBar } from '../../components/navBar/navBar';
import { isAuthenticated } from '../../utils/authenticationService';
import { ChildComponentProps } from './customRouterTypes';
/**
 *
 * @param {Object} history
 * @param {string} action
 * @param {Object} location
 * @param children
 * @returns With this component we are able to be attentive to any route change and return the corresponding view
 */
export const CustomRouter = ({ history, ...props }: ChildComponentProps): JSX.Element => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <>
            {isAuthenticated() ? <NavBar /> : <></>}
            <Router {...props} location={state.location} navigationType={state.action} navigator={history} />
        </>
    );
};

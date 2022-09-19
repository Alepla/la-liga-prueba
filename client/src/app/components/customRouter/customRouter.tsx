import React, { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';
import { NavBar } from '../navBar/navBar';
import { isAuthenticated } from '../../services/authenticationService';

interface ChildComponentProps {
    history: History;
    children: JSX.Element;
}

/**
 *
 * @param {Object} history
 * @param {string} action
 * @param {Object} location
 * @param children
 * @returns With this component we are able to be attentive to any route change and return the corresponding view
 */
export const CustomRouter = ({ history, ...props }: ChildComponentProps) => {
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

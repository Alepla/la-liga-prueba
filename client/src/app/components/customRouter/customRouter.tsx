import React, { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';

interface ChildComponentProps {
    history: History;
    children: JSX.Element;
}

/**
 * With this component we are able to be attentive to any route change and return the corresponding view
 * @param {Object} history
 * @param {string} action
 * @param {Object} location
 * @param children
 * @returns
 */
export const CustomRouter = ({ history, ...props }: ChildComponentProps) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};
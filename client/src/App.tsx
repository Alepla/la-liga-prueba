import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './features/login/login';
import { Clubs } from './features/clubs/clubs';
import { ProtectedRoute, ProtectedRouteProps } from './app/components/protectedRoute/protectedRoute';
import { history } from './helpers/history';
import { CustomRouter } from './app/components/customRouter/customRouter';

/**
 * By default, if the user is not logged in, they will be redirected to login.
 */
const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
};

export const App = () => {
    return (
        <CustomRouter history={history}>
            <Routes>
                <Route path="/clubs" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Clubs />} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
        </CustomRouter>
    );
};

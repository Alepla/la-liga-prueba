import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './features/login/login';
import { Clubs } from './features/clubs/clubs';
import { NotFoundPage } from './features/notFoundPage/notFoundPage';
import { history } from './helpers/history';
import { ProtectedRoute, ProtectedRouteProps } from './app/components/protectedRoute/protectedRoute';
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
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </CustomRouter>
    );
};

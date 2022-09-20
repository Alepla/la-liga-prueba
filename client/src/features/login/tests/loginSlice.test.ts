import React from 'react';
import { loginReducer, loginSlice, loginUserFetch, loginUserSuccess, loginUserError } from '../loginSlice';
import { REDUX_INITIAL_STATE } from '../loginConsts';
import { AuthCredentials, ErrorResponse } from '../loginTypes';

describe('login reducer', () => {
    const initialState = REDUX_INITIAL_STATE;

    it('should handle initial state', () => {
        expect(loginSlice.getInitialState()).toEqual(initialState);
    });

    it('should handle loginUserFetch', () => {
        const authCredentials: AuthCredentials = { email: 'email@test.com', password: '123' };
        const actual = loginReducer(initialState, loginUserFetch(authCredentials));
        expect(actual.isProcessingRequest).toEqual(true);
    });
    it('should handle loginUserSuccess', () => {
        const accessToken = { accessToken: 'token' };
        const actual = loginReducer(initialState, loginUserSuccess(accessToken.accessToken));
        expect(actual.isProcessingRequest).toEqual(false);
        expect(actual.accessToken).toEqual(accessToken.accessToken);
        expect(actual.success).toEqual(true);
    });
    it('should handle loginUserError', () => {
        const error: ErrorResponse = { status: 400, message: 'Invalid credentials' };
        const actual = loginReducer(initialState, loginUserError(error));
        expect(actual.isProcessingRequest).toEqual(false);
        expect(actual.error).toEqual(error);
        expect(actual.success).toEqual(false);
    });
});

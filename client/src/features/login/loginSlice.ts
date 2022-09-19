import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthCredentials, ErrorResponse } from './loginTypes';
import { REDUX_INITIAL_STATE } from './loginConsts';

const initialState = REDUX_INITIAL_STATE;
/**
 * All the reducers of the login component are declared here.
 */
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        /**
         *
         * @param state
         * @param action
         * @returns This function is in charge of communicating between the component or in this case the saga middleware with the API.
         */
        loginUserFetch: (state, action: PayloadAction<AuthCredentials>) => {
            return {
                ...state,
                isProcessingRequest: true,
            };
        },
        /**
         *
         * @param state
         * @param action
         * @returns If the response is as expected, it executes the following function which saves the authentication token in the redux state.
         */
        loginUserSuccess: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                accessToken: action.payload,
                error: initialState.error,
                success: true,
                isProcessingRequest: false,
            };
        },
        /**
         *
         * @param state
         * @param action
         * @returns If the response is not the desired one, the error is saved.
         */
        loginUserError: (state, action: PayloadAction<ErrorResponse>) => {
            return {
                ...state,
                error: action.payload,
                success: false,
                isProcessingRequest: false,
            };
        },
    },
});

export const { loginUserFetch, loginUserSuccess, loginUserError } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login;
export const loginReducer = loginSlice.reducer;

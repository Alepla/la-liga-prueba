import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthCredentials, AuthResponse } from './loginTypes';
import { getAccessToken } from '../../app/services/localStorage';

export type Authentication = {
    isProcessingRequest: boolean;
    accessToken?: string;
    error: string | null;
    success: boolean;
};

const initialState: Authentication = {
    isProcessingRequest: false,
    accessToken: getAccessToken(),
    error: null,
    success: false,
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUserFetch: (state, action: PayloadAction<AuthCredentials>) => {
            return {
                ...state,
                isProcessingRequest: true,
            };
        },
        loginUserSuccess: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                accessToken: action.payload,
                success: true,
                isProcessingRequest: false,
            };
        },
        loginUserError: (state, action: PayloadAction<string>) => {
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

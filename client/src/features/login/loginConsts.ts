import { getAccessToken } from '../../app/services/localStorage';
import { Authentication } from './loginTypes';

export const LOGIN_CONF = {
    email: {
        value: '',
        validations: {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
    },
    password: {
        value: '',
        validations: {
            required: true,
            pattern: null,
        },
    },
};

export const REDUX_INITIAL_STATE: Authentication = {
    isProcessingRequest: false,
    accessToken: getAccessToken(),
    error: {
        status: null,
        message: '',
    },
    success: false,
};

export const BASIC_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

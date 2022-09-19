import fetchIntercept from 'fetch-intercept';
import { store } from '../store';

export const AuthInterceptor = () => {
    const state = store.getState();
    const {
        login: { accessToken },
    } = state;
    fetchIntercept.register({
        request: (url: string, config: any) => {
            config.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            };

            return [url, config];
        },

        requestError: (error: any) => {
            return Promise.reject(error);
        },

        response: (response: any) => {
            return response;
        },

        responseError: (error: any) => {
            return Promise.reject(error);
        },
    });
};

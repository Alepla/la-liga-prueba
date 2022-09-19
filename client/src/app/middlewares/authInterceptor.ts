import fetchIntercept from 'fetch-intercept';
import { store } from '../store';

export const AuthInterceptor = () => {
    const state = store.getState();
    const { login } = state;
    fetchIntercept.register({
        request: function (url: string, config: any) {
            config.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${login.accessToken}`,
            };
            return [url, config];
        },

        requestError: function (error: any) {
            return Promise.reject(error);
        },

        response: function (response: any) {
            return response;
        },

        responseError: function (error: any) {
            return Promise.reject(error);
        },
    });
};

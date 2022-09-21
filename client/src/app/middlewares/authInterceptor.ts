import fetchIntercept, { FetchInterceptorResponse } from 'fetch-intercept';
import { store } from '../store';
import { RequestConfig } from '../types/apiParamsTypes';

/**
 * Interceptor encargado de añadir los headers en especial el token para las peticiones a la API.
 */
export const AuthInterceptor = (): void => {
    fetchIntercept.register({
        request: (url: string, config: RequestConfig): Promise<unknown[]> | unknown[] => {
            const state = store.getState();
            const {
                login: { accessToken },
            } = state;
            config.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            };

            return [url, config];
        },

        requestError: (error: Error): Promise<Error> => {
            return Promise.reject(error);
        },

        response: (response: FetchInterceptorResponse): FetchInterceptorResponse => {
            return response;
        },

        responseError: (error: Error): Promise<Error> => {
            return Promise.reject(error);
        },
    });
};

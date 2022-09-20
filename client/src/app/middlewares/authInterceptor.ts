import fetchIntercept, { FetchInterceptorResponse } from 'fetch-intercept';
import { store } from '../store';

/**
 * Interceptor encargado de añadir los headers en especial el token para las peticiones a la API.
 */
export const AuthInterceptor = (): void => {
    const state = store.getState();
    const {
        login: { accessToken },
    } = state;
    fetchIntercept.register({
        request: (url: string, config: any): Promise<any[]> | any[] => {
            config.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            };

            return [url, config];
        },

        requestError: (error: any): Promise<any> => {
            return Promise.reject(error);
        },

        response: (response: FetchInterceptorResponse): FetchInterceptorResponse => {
            return response;
        },

        responseError: (error: any): Promise<any> => {
            return Promise.reject(error);
        },
    });
};

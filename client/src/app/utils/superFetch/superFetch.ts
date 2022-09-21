import { AuthInterceptor } from '../../middlewares/authInterceptor';
import { removeTokens } from '../localStorage';
import { env_var } from '../../../config/env';
import { SuperFetchParams } from './superFetchTypes';

/**
 *
 * @param response
 * @returns Function in charge of controlling the responses of the API.
 * The response is of type any since it is used in all requests to the API by the APP.
 */
export const handleResponse = async (response: any) => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;
    /**
     * Check for error response.
     */
    if (!response.ok) {
        if (data.status === 403 || data.status === 401) removeTokens();
        /**
         * Get error message from body or default to response status.
         */
        return Promise.reject(data);
    } else {
        return data;
    }
};
/**
 *
 * @param params
 * @returns SuperFetch function in charge of calling the API to log in the user.
 */
export const superFetch = async (params: SuperFetchParams) => {
    const { url, method, body, headers } = params;
    if (!headers) AuthInterceptor();
    return await fetch(env_var.BASE_URL + url, { method, body, headers })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

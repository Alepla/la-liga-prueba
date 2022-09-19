import { removeTokens } from './localStorage';

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

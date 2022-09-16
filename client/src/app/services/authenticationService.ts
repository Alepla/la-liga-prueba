import { getAccessToken } from './localStorage';

/**
 *  With this service we return true if there is a user token in local storage or false otherwiseS
 * @returns
 */
export const isAuthenticated = (): boolean => {
    return getAccessToken() ? true : false;
};

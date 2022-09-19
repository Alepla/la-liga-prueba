import { getAccessToken } from './localStorage';

/**
 *
 * @returns With this service we return true if there is a user token in local storage or false otherwise
 */
export const isAuthenticated = (): boolean => {
    return getAccessToken() ? true : false;
};

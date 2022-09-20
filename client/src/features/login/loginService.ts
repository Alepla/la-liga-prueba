import { superFetch } from '../../app/utils/superFetch';
import { AuthCredentials, AuthResponse } from './loginTypes';
import { BASIC_HEADERS } from './loginConsts';

/**
 *
 * @param data
 * @returns Function in charge to log in the user.
 */
export const authenticate = async (data: AuthCredentials): Promise<AuthResponse> => {
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });
    const params = {
        url: 'login',
        method: 'post',
        body,
        headers: BASIC_HEADERS,
    };
    return await superFetch(params);
};

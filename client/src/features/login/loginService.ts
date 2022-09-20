import { env_var } from '../../config/env';
import { handleResponse } from '../../app/services/apiService';
import { AuthCredentials, AuthResponse } from './loginTypes';
import { BASIC_HEADERS } from './loginConsts';

/**
 *
 * @param data
 * @returns Service in charge of calling the API to log in the user.
 */
export const authenticate = async (data: AuthCredentials): Promise<AuthResponse> => {
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });
    const url = env_var.BASE_URL + 'login';
    const headers = BASIC_HEADERS;
    return await fetch(url, { method: 'post', body, headers })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

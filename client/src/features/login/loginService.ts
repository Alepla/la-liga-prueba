import { env_var } from '../../config/env';
import { post } from '../../app/services/apiService';
import { AuthResponse, AuthCredentials } from './loginTypes';

export const authenticate = async (data: AuthCredentials) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });
    return await post(env_var.BASE_URL + 'login', body, headers);
};

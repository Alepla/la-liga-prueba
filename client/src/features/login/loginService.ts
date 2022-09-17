import { env_var } from '../../config/env';
import { AuthCredentials } from './loginTypes';
import { post } from '../../app/services/apiService';
import { showResponseMessage } from '../../app/services/responseHandler';
import { setTokens } from '../../app/services/localStorage';
import { history } from '../../helpers/history';

export const authenticate = async (data: AuthCredentials) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });
    const response = await post(env_var.BASE_URL + 'login', body, headers);
    if (response.token) {
        setTokens(response.token);
        history.push('/clubs');
    } else {
        const message = showResponseMessage(response.status);
        console.log(message);
    }
};

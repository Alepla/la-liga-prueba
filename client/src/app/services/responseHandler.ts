import { Error } from '../types/errorControlTypes';

export const showResponseMessage = (error: Error) => {
    let {
        error: { message, status },
    } = error;
    let type = '';

    switch (status) {
        case 200:
            type = 'alert-success';
            message = message ? message : '';
            break;
        case 400:
            type = 'alert-danger';
            message = message ? message : 'The request is not in the correct format';
            break;
        case 401:
        case 403:
            type = 'alert-danger';
            message = message ? message : 'You do not have permissions to access the requested resource';
            break;
        case 404:
            type = 'alert-danger';
            message = message ? message : 'Resource not found';
            break;
        case 500:
            type = 'alert-danger';
            message = message ? message : 'An error has occurred on the server';
            break;
    }
    return { type, message };
};

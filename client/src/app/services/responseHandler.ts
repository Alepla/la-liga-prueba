import { Error, Status } from '../types/errorControlTypes';

/**
 *
 * @param error
 * @returns With this function we are not in charge of controlling what error to show to the user, if one comes by default from the API, we show that one, otherwise one by default defined by front.
 */
export const showResponseMessage = (error: Error) => {
    let { message, status } = error;
    let type: Status = undefined;

    switch (status) {
        case 200:
            type = 'success';
            message = message ? message : '';
            break;
        case 400:
            type = 'error';
            message = message ? message : 'The request is not in the correct format';
            break;
        case 401:
        case 403:
            type = 'error';
            message = message ? message : 'You do not have permissions to access the requested resource';
            break;
        case 404:
            type = 'error';
            message = message ? message : 'Resource not found';
            break;
        case 500:
            type = 'error';
            message = message ? message : 'An error has occurred on the server';
            break;
    }
    return { type, message };
};

import { HandlerResponse, Status, HandlerResponseParams } from './responseHandlerTypes';

/**
 *
 * @param params
 * @returns With this function we are not in charge of controlling what error to show to the user, if one comes by default from the API, we show that one, otherwise one by default defined by front.
 */
export const showResponseMessage = (params: HandlerResponseParams): HandlerResponse => {
    let { message, status } = params;
    let type: Status = undefined;
    let resMessage = '';

    switch (status) {
        case 200:
            type = 'success';
            resMessage = message ? message : '';
            break;
        case 400:
            type = 'error';
            resMessage = message ? message : 'The request is not in the correct format';
            break;
        case 401:
        case 403:
            type = 'error';
            resMessage = message ? message : 'You do not have permissions to access the requested resource';
            break;
        case 404:
            type = 'error';
            resMessage = message ? message : 'Resource not found';
            break;
        case 500:
            type = 'error';
            resMessage = message ? message : 'An error has occurred on the server';
            break;
    }
    return { type, resMessage };
};

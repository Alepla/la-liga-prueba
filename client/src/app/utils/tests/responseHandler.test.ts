import { showResponseMessage } from '../responseHandler';
import { HandlerResponse, HandlerResponseParams } from '../../types/responseHandlerControlTypes';

describe('showResponseMessage utility tests', () => {
    it('should return a 200 success message', async () => {
        const params: HandlerResponseParams = {
            status: 200,
            message: 'Updated correctly',
        };
        const response: HandlerResponse = {
            type: 'success',
            message: params.message,
        };
        expect(showResponseMessage(params)).toStrictEqual(response);
    });

    it('should return a 400 error predefined message', async () => {
        const params: HandlerResponseParams = {
            status: 400,
            message: '',
        };
        const response: HandlerResponse = {
            type: 'error',
            message: 'The request is not in the correct format',
        };
        expect(showResponseMessage(params)).toStrictEqual(response);
    });

    it('should return a 400 error message', async () => {
        const params: HandlerResponseParams = {
            status: 400,
            message: 'Invalid user',
        };
        const response: HandlerResponse = {
            type: 'error',
            message: 'Invalid user',
        };
        expect(showResponseMessage(params)).toStrictEqual(response);
    });
});

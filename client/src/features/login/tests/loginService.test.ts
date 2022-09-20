import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { authenticate } from '../loginService';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
    })
) as jest.Mock;

/* beforeEach(() => {
    fetch.mockClear();
});
 */
test('handles server error', async () => {
    const data = {
        email: 'test',
        password: 'asd',
    };
    /* const response = await authenticate(data);
    expect(response).toEqual(100); */

    /* fireEvent.click(screen.getByText('Load Greeting'));

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
    expect(screen.getByRole('button')).not.toBeDisabled(); */
});

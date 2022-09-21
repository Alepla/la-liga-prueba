import React from 'react';
import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/serverHandler';

const server = setupServer(...handlers);

describe('testing login service', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('', () => {});
});

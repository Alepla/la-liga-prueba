import { rest } from 'msw';
import { env_var } from '../config/env';

export const handlers = [
    rest.post(env_var.BASE_URL + 'login', (req, res, ctx) => {
        return res(ctx.json({ response: { status: 400, message: 'error' } }));
    }),
];

import { Headers } from '../types/apiParamsTypes';
import { memoize } from '../middlewares/memoize';
import { AuthInterceptor } from '../middlewares/authInterceptor';

type Resp = {
    token: string;
    status: number;
    message: string;
};

export const get = memoize(async (url: string): Promise<any> => {
    AuthInterceptor();
    return await fetch(url, { method: 'get' })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
});

export const post = async (url: string, body: any, headers: Headers): Promise<Resp> => {
    return await fetch(url, { method: 'post', headers, body })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

export const patch = async (url: string, body: any): Promise<Resp> => {
    AuthInterceptor();
    return await fetch(url, { method: 'PATCH', body })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

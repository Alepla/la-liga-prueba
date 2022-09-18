import { Headers } from '../types/apiParamsTypes';

type Resp = {
    token: string;
    status: number;
    message: string;
};

export const get = async (url: string, headers: Headers): Promise<any> => {
    return await fetch(url, { method: 'get', headers })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
};

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

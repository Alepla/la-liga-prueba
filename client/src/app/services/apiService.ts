import { memoize } from '../middlewares/memoize';

type Resp = {
    token: string;
    status: number;
    message: string;
};

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const handleResponse = async (response: any) => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;
    // check for error response
    if (!response.ok) {
        // get error message from body or default to response status
        return Promise.reject(data);
    } else {
        return data;
    }
};

export const get = memoize(async (url: string): Promise<any> => {
    return await fetch(url, { method: 'get' })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
});

export const post = async (url: string, body: any): Promise<any> => {
    return await fetch(url, { method: 'post', body, headers })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

export const patch = async (url: string, body: any): Promise<any> => {
    console.log(body);
    return await fetch(url, { method: 'PATCH', body })
        .then((response) => {
            console.log(response);
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

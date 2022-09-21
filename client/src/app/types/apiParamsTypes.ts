export type Headers = {
    Accept: string;
    'Content-Type': string;
    Authorization?: string;
};

export type RequestConfig = {
    body: string;
    headers: Headers;
    method: string;
};

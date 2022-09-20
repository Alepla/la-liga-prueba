export type Headers = {
    Accept: string;
    'Content-Type': string;
};

export type SuperFetchParams = {
    url: string;
    method: string;
    body?: any;
    headers?: Headers;
};

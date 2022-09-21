import { Headers } from '../../types/apiParamsTypes';
export type SuperFetchParams = {
    url: string;
    method: string;
    body?: string;
    headers?: Headers;
};

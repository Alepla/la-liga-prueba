export type HandlerResponseParams = {
    message?: string;
    status: number | null;
};

export type HandlerResponse = {
    resMessage: string;
    type: Status;
};

export type Status = 'success' | 'error' | undefined;

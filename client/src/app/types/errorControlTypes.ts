export type Error = {
    message: string;
    status: number | null;
};

export type ErrorHandlerResponse = {
    message: string;
    type: Status;
};

export type Status = 'success' | 'error' | undefined;

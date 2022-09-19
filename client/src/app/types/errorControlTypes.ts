export type Error = {
    message: string;
    status: number | null;
};

export type Status = 'success' | 'error' | undefined;

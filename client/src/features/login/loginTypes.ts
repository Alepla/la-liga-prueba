export type AuthCredentials = {
    email: string;
    password: string;
};

export type AuthResponse = {
    token: string;
    message?: string;
    status: number;
};

export type LoginConf = {
    email: {
        value: string;
        validations: {
            required: boolean;
            pattern: RegExp | null;
        };
    };
    password: {
        value: string;
        validations: {
            required: boolean;
            pattern: RegExp | null;
        };
    };
};

export type LoginErrors = {
    email?: string;
    password?: string;
};

export type AuthenticationState = {
    isProcessingRequest: boolean;
    accessToken?: string;
    error: {
        status: number | null;
        message?: string;
    };
    success: boolean;
};

export type ErrorResponse = {
    message?: string;
    status: number;
};

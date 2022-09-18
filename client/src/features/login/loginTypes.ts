export type AuthCredentials = {
    email: string;
    password: string;
};

export type AuthResponse = {
    token: string;
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

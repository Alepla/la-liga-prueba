export type AuthCredentials = {
    email: string;
    password: string;
};

export type AuthResponse = {
    token: string;
    message: string;
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
        message: string;
    };
    success: boolean;
};

export type ErrorResponse = {
    message: string;
    status: number;
};

export type UseFieldsReturnType = {
    fields: LoginConf;
    errors: LoginErrors;
    passwdVisible: boolean;
    handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputVisibility: () => void;
    getErrors: () => Promise<boolean>;
};

export type UseControlSubmitType = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type UseControlSubmitProps = {
    getErrors: () => Promise<boolean>;
    email: string;
    password: string;
};

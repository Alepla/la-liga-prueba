import { FormEvent } from 'react';

export type UseControlSubmitType = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export type UseControlSubmitProps = {
    getErrors: () => Promise<boolean>;
    email: string;
    password: string;
};

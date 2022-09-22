import { ChangeEvent } from 'react';
import { LoginConf, LoginErrors } from '../../loginTypes';

export type UseFieldsReturnType = {
    fields: LoginConf;
    errors: LoginErrors;
    passwdVisible: boolean;
    handleFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleInputVisibility: () => void;
    getErrors: () => Promise<boolean>;
};

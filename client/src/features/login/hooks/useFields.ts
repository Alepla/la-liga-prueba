import React, { useState } from 'react';
import { LoginConf, LoginErrors } from '../loginTypes';

export const useFields = (initialState: LoginConf) => {
    const [fields, setValues] = useState<LoginConf>(initialState);
    const [errors, setErrors] = useState<LoginErrors>({});

    const getErrors = async () => {
        let valid = false;
        let errorMessage: LoginErrors = errors;
        Object.keys(fields).forEach((field): void => {
            const validations = fields[field as keyof typeof fields].validations;
            switch (true) {
                case validations.required && fields[field as keyof typeof fields].value === '':
                    Object.assign(errorMessage, { [field]: `The ${field} is required` });
                    break;
                case Boolean(validations.pattern) && !validations.pattern?.test(fields[field as keyof typeof fields].value):
                    Object.assign(errorMessage, { [field]: `The ${field} must be valid` });
                    break;
                default:
                    delete errorMessage[field as keyof typeof fields];
                    if (Object.entries(errorMessage).length === 0) valid = true;
                    break;
            }
        });
        setErrors({ ...errorMessage });
        return valid;
    };

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const updatedField = {
            [(event.target as HTMLInputElement).id]: {
                ...fields[(event.target as HTMLInputElement).id as keyof typeof fields],
                value: (event.target as HTMLInputElement).value,
            },
        };
        setValues({
            ...fields,
            ...updatedField,
        });
    };

    return [fields, handleFieldChange, getErrors, errors] as const;
};

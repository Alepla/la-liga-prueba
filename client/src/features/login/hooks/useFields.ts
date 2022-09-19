import React, { useState } from 'react';
import { LoginConf, LoginErrors } from '../loginTypes';

/**
 *
 * @param initialState
 * @returns Custom hook in charge of the actions of the form.
 */
export const useFields = (initialState: LoginConf) => {
    /**
     * The form inputs are saved in the state.
     */
    const [fields, setValues] = useState<LoginConf>(initialState);
    const [errors, setErrors] = useState<LoginErrors>({});

    /**
     *
     * @returns Function responsible for returning errors depending on the specified validations.
     */
    const getErrors = async () => {
        let valid = false;
        /**
         * We create a copy of the errors saved in the state so as not to update them within a loop.
         */
        let errorMessage: LoginErrors = errors;
        /**
         * We iterate the fields object which contains each of the inputs and their respective validations.
         */
        Object.keys(fields).forEach((field): void => {
            const validations = fields[field as keyof typeof fields].validations;
            /**
             * If the validation is active and the condition is not met, the error is saved in the object
             * previously created.
             */
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
        /**
         * Once the loop is finished, we save all the errors in the state and return if it is valid or not.
         */
        setErrors({ ...errorMessage });
        return valid;
    };

    /**
     *
     * @param event
     * Function responsible for updating the value of the form inputs.
     */
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

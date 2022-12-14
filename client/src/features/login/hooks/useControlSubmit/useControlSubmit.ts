import React, { FormEvent, useEffect } from 'react';
import { AuthCredentials } from '../../loginTypes';
import { history } from '../../../../helpers/history';
import { useAppDispatch } from '../../../../app/hooks';
import { loginUserFetch } from '../../loginSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../../app/utils/responseHandler/responseHandler';
import { UseControlSubmitProps, UseControlSubmitType } from './useControlSubmitTypes';

export const useControlSubmit = (props: UseControlSubmitProps): UseControlSubmitType => {
    const { getErrors, email, password } = props;
    /**
     * With useSelector we access the redux state to be able to use the token or the error if there has been one.
     */
    const { accessToken, error } = useSelector((state: RootState) => state.login);
    const dispatch = useAppDispatch();
    const toast = useToast();
    /**
     *
     * @param e
     * Function in charge of making a request to /login to log in the user.
     */
    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const isValid = await getErrors();
        if (isValid) {
            const data: AuthCredentials = {
                email: email,
                password: password,
            };
            dispatch(loginUserFetch(data));
        }
    };

    /**
     * Hook that redirects the user to /clubs if there is a token or show the toast error.
     */
    useEffect((): void => {
        if (accessToken) history.push('/clubs');
        if (error.status) showToast();
    }, [accessToken, error]);

    /**
     * Function in charge of teaching the toast in case the login has gone wrong.
     */
    const showToast = (): void => {
        const { type, resMessage } = showResponseMessage(error);
        toast({
            title: resMessage,
            status: type,
            duration: 9000,
            isClosable: true,
        });
    };

    return { onSubmit } as const;
};

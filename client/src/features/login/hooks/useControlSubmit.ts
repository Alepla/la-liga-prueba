import React, { useEffect } from 'react';
import { AuthCredentials, UseControlSubmitProps, UseControlSubmitType } from '../loginTypes';
import { history } from '../../../helpers/history';
import { useAppDispatch } from '../../../app/hooks';
import { loginUserFetch } from '../loginSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../app/utils/responseHandler/responseHandler';

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
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
     * Hook that redirects the user to /clubs if there is a token.
     */
    useEffect((): void => {
        if (accessToken) history.push('/clubs');
        if (error.status) showToast();
    }, [accessToken, error]);

    const showToast = () => {
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

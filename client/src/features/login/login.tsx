import React, { useEffect } from 'react';
import { AuthCredentials } from './loginTypes';
import { history } from '../../helpers/history';
import { useAppDispatch } from '../../app/hooks';
import { loginUserFetch } from './loginSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Image, FormHelperText, useToast } from '@chakra-ui/react';
import loginHeader from '../../assets/img/loginHeader.jpg';
import logo from '../../assets/img/logo.png';
import { useFields } from './hooks/useFields';
import { LOGIN_CONF } from './loginConsts';
import { showResponseMessage } from '../../app/services/responseHandler';

export const Login = () => {
    /**
     * With useSelector we access the redux state to be able to use the token or the error if there has been one.
     */
    const { accessToken, error } = useSelector((state: RootState) => state.login);
    /**
     * Custom hook that is responsible for controlling the form inputs.
     */
    const [fields, handleFieldChange, getErrors, errors] = useFields(LOGIN_CONF);
    const dispatch = useAppDispatch();
    const toast = useToast();
    /**
     *
     * @param e
     * Function in charge of making a request to /login to log in the user.
     */
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await getErrors();
        if (isValid) {
            const data: AuthCredentials = {
                email: fields.email.value,
                password: fields.password.value,
            };
            dispatch(loginUserFetch(data));
        }
    };

    /**
     * Hook that redirects the user to /clubs if there is a token.
     */
    useEffect(() => {
        if (accessToken) history.push('/clubs');
        if (error.status) {
            const { type, message } = showResponseMessage(error);
            toast({
                title: message,
                status: type,
                duration: 9000,
                isClosable: true,
            });
        }
    }, [accessToken, error]);

    return (
        <Box>
            <Center h={['', '100vh']}>
                <Flex w={'full'} align={'center'} justifyContent={'center'}>
                    <Box h={650} maxWidth={400} borderWidth={[0, 1]} borderRadius={0} boxShadow={['none', 'lg']}>
                        <Box textAlign={'center'}>
                            <Center>
                                <Image alt={'Login header'} src={loginHeader} />
                            </Center>
                            <Center>
                                <Image position={'absolute'} borderRadius={'full'} boxSize={'100px'} src={logo} alt={'La Liga Logo'} />
                            </Center>
                        </Box>
                        <Box my={10} textAlign={'left'} p={4}>
                            <form onSubmit={onSubmit}>
                                <FormControl>
                                    <FormLabel textTransform={'uppercase'} fontSize={'xs'} color={'grey'}>
                                        Email
                                    </FormLabel>
                                    <Input
                                        isInvalid={errors.email ? true : false}
                                        errorBorderColor="crimson"
                                        type={'text'}
                                        borderRadius={'none'}
                                        borderColor={'black'}
                                        id={'email'}
                                        value={fields.email.value}
                                        onChange={handleFieldChange}
                                    />
                                    {errors.email && (
                                        <FormHelperText fontSize={'sm'} color={'red'}>
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl paddingTop={'20px'}>
                                    <FormLabel textTransform={'uppercase'} fontSize={'xs'} color={'grey'}>
                                        Password
                                    </FormLabel>
                                    <Input
                                        isInvalid={errors.password ? true : false}
                                        errorBorderColor="crimson"
                                        type={'password'}
                                        id={'password'}
                                        autoComplete={'off'}
                                        borderRadius={'none'}
                                        borderColor={'black'}
                                        value={fields.password.value}
                                        onChange={handleFieldChange}
                                    />
                                    {errors.password && (
                                        <FormHelperText fontSize={'sm'} color={'red'}>
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Button
                                    type={'submit'}
                                    textTransform={'uppercase'}
                                    variant={'outline'}
                                    w={'full'}
                                    mt={4}
                                    colorScheme={'black'}
                                    borderRadius={'none'}
                                    background={'black'}
                                    color={'white'}
                                    h={'55px'}
                                >
                                    Sign In
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </Center>
        </Box>
    );
};

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthCredentials } from './loginTypes';
import { history } from '../../helpers/history';
import { useAppDispatch } from '../../app/hooks';
import { loginUserFetch } from './loginSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Image, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import loginHeader from '../../assets/img/loginHeader.jpg';
import logo from '../../assets/img/logo.png';

/**
 *
 * @returns
 */
export const Login = () => {
    const { accessToken } = useSelector((state: RootState) => state.login);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthCredentials>();

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<AuthCredentials> = (data) => dispatch(loginUserFetch(data));

    useEffect(() => {
        if (accessToken) {
            history.push('/clubs');
        }
    }, []);

    return (
        <Center bg={['#fff', '#e4e4e4']} h="100vh">
            <Flex w="full" align="center" justifyContent="center">
                <Box h={650} maxWidth={400} borderWidth={[0, 1]} borderRadius={0} boxShadow={['none', 'lg']}>
                    <Box textAlign="center">
                        <Center>
                            <Image src={loginHeader} />
                        </Center>
                        <Center>
                            <Image position="absolute" borderRadius="full" boxSize="100px" src={logo} alt="La Liga Logo" />
                        </Center>
                    </Box>
                    <Box my={10} textAlign="left" p={4}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl>
                                <FormLabel textTransform="uppercase" fontSize="xs" color="grey">
                                    Email
                                </FormLabel>
                                <Input
                                    type="text"
                                    borderRadius="none"
                                    borderColor="black"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                {errors.email && errors.email.type === 'required' && (
                                    <FormHelperText fontSize="sm" color="red">
                                        Email is required
                                    </FormHelperText>
                                )}
                                {errors.email && errors.email.type === 'pattern' && (
                                    <FormHelperText fontSize="sm" color="red">
                                        Please enter a valid email
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl paddingTop="20px">
                                <FormLabel textTransform="uppercase" fontSize="xs" color="grey">
                                    Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    borderRadius="none"
                                    borderColor="black"
                                    {...register('password', {
                                        required: true,
                                    })}
                                />
                                {errors.password && errors.password.type === 'required' && (
                                    <FormHelperText fontSize="sm" color="red">
                                        Password is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Button type="submit" textTransform="uppercase" variant="outline" w="full" mt={4} colorScheme="black" borderRadius="none" background="black" color="white" h="55px">
                                Sign In
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Center>
    );
};

export default Login;

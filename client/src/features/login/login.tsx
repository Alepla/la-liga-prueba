import React, { useEffect } from 'react';
import { AuthCredentials } from './loginTypes';
import { history } from '../../helpers/history';
import { useAppDispatch } from '../../app/hooks';
import { loginUserFetch } from './loginSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Image, FormHelperText } from '@chakra-ui/react';
import loginHeader from '../../assets/img/loginHeader.jpg';
import logo from '../../assets/img/logo.png';
import { FeedbackControl } from '../../app/components/feedbackControl/feedbackControl';
import { useFields } from './hooks/useFields';
import { LOGIN_CONF } from './loginConsts';
/**
 *
 * @returns
 */
export const Login = () => {
    const { accessToken, status } = useSelector((state: RootState) => state.login);
    const [fields, handleFieldChange, getErrors, errors] = useFields(LOGIN_CONF);
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
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (accessToken) history.push('/clubs');
    }, []);

    return (
        <Box>
            <Center h={['', '100vh']}>
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
                            <form onSubmit={onSubmit}>
                                <FormControl>
                                    <FormLabel textTransform="uppercase" fontSize="xs" color="grey">
                                        Email
                                    </FormLabel>
                                    <Input type="text" borderRadius="none" borderColor="black" id="email" value={fields.email.value} onChange={handleFieldChange} />
                                    {errors.email && (
                                        <FormHelperText fontSize="sm" color="red">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl paddingTop="20px">
                                    <FormLabel textTransform="uppercase" fontSize="xs" color="grey">
                                        Password
                                    </FormLabel>
                                    <Input type="password" id="password" autoComplete="off" borderRadius="none" borderColor="black" value={fields.password.value} onChange={handleFieldChange} />
                                    {errors.password && (
                                        <FormHelperText fontSize="sm" color="red">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Button type="submit" textTransform="uppercase" variant="outline" w="full" mt={4} colorScheme="black" borderRadius="none" background="black" color="white" h="55px">
                                    Sign In
                                </Button>
                            </form>
                        </Box>
                        <FeedbackControl status={status}></FeedbackControl>
                    </Box>
                </Flex>
            </Center>
        </Box>
    );
};

import React from 'react';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Image, FormHelperText, InputGroup, InputRightElement } from '@chakra-ui/react';
import loginHeader from '../../assets/img/loginHeader.jpg';
import logo from '../../assets/img/logo.png';
import { useFields } from './hooks/useFilelds/useFields';
import { LOGIN_CONF } from './loginConsts';
import { ViewIcon } from '@chakra-ui/icons';
import { useControlSubmit } from './hooks/useControlSubmit/useControlSubmit';

export const Login = (): JSX.Element => {
    /**
     * Custom hook that is responsible for controlling the form inputs.
     */
    const { fields, errors, passwdVisible, handleFieldChange, getErrors, handleInputVisibility } = useFields(LOGIN_CONF);
    const { onSubmit } = useControlSubmit({ getErrors, email: fields.email.value, password: fields.password.value });

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
                                        aria-label={'Email input'}
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
                                    <InputGroup>
                                        <Input
                                            aria-label={'Password input'}
                                            isInvalid={errors.password ? true : false}
                                            errorBorderColor="crimson"
                                            type={passwdVisible ? 'text' : 'password'}
                                            id={'password'}
                                            autoComplete={'off'}
                                            borderRadius={'none'}
                                            borderColor={'black'}
                                            value={fields.password.value}
                                            onChange={handleFieldChange}
                                        />
                                        <InputRightElement onClick={handleInputVisibility} cursor={'pointer'} children={<ViewIcon color={passwdVisible ? 'black' : 'gray.300'} />} />
                                    </InputGroup>
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

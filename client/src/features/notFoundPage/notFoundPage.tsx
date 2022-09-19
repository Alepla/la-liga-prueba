import React from 'react';
import { history } from '../../helpers/history';
import { Box, Button, Center, Flex, FormControl, FormHelperText } from '@chakra-ui/react';

/**
 *
 * @returns
 */
export const NotFoundPage = () => {
    /**
     *
     * @returns Hitting the Go back button redirects the user to /login if they are not logged in or /clubs if they are.
     */
    const onSubmit = () => history.push('/');

    return (
        <Box>
            <Center h={['', '100vh']}>
                <Flex w="full" align="center" justifyContent="center">
                    <Box>
                        <FormControl>
                            <Center my={20} textAlign="center">
                                <FormHelperText fontSize={['4xl', '6xl']} color="black">
                                    404 - PAGE NOT FOUND
                                </FormHelperText>
                            </Center>

                            <Center my={20}>
                                <Button type="submit" textTransform="uppercase" colorScheme="black" background="black" color="white" onClick={onSubmit}>
                                    Go back
                                </Button>
                            </Center>
                        </FormControl>
                    </Box>
                </Flex>
            </Center>
        </Box>
    );
};

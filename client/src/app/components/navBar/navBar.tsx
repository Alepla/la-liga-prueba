import React from 'react';
import { Box, Flex, Button, Stack, useColorModeValue, useBreakpointValue, Image } from '@chakra-ui/react';
import { removeTokens } from '../../utils/localStorage';
import logo from '../../../assets/img/logo.png';

/**
 *
 * @returns App navigation menu
 */
export const NavBar = (): JSX.Element => {
    const onRemoveTokens = (): void => {
        removeTokens();
    };
    return (
        <>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                >
                    <Flex flex={{ base: 1 }} justify={'start'}>
                        <Image aria-label={'Logo de la liga'} boxSize={'60px'} textAlign={useBreakpointValue({ base: 'center', md: 'left' })} alt={'La Liga Logo'} src={logo} />
                    </Flex>

                    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <Button type={'submit'} fontSize={'sm'} fontWeight={400} variant={'link'} onClick={onRemoveTokens}>
                            Log out
                        </Button>
                    </Stack>
                </Flex>
            </Box>
        </>
    );
};

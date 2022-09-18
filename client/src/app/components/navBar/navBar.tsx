import React, { useEffect } from 'react';
import { Box, Flex, IconButton, Button, Stack, useColorModeValue, useBreakpointValue, useDisclosure, Image } from '@chakra-ui/react';
import { removeTokens } from '../../services/localStorage';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../../../assets/img/logo.png';

export const NavBar = () => {
    const { isOpen, onToggle } = useDisclosure();
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
                    <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                        <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Image boxSize="60px" textAlign={useBreakpointValue({ base: 'center', md: 'left' })} alt="La Liga Logo" src={logo} />
                    </Flex>

                    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <Button type="submit" as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} onClick={() => removeTokens()}>
                            Log out
                        </Button>
                    </Stack>
                </Flex>
            </Box>
        </>
    );
};

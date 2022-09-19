import React from 'react';
import { ClubsItems } from '../clubsTypes';
import { Box, Flex, Image, Center, Avatar, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { updateClub } from '../clubsService';
export interface ClubsListProps {
    clubs: ClubsItems[];
    onUpdateClub: (club: ClubsItems) => void;
}

/**
 *
 * @param props
 * @returns
 */
export const ClubsList = (props: ClubsListProps) => {
    let { clubs, onUpdateClub } = props;
    /**
     *
     * @param clubID
     * @param isFavorite
     * Función encargada de controlar el evento onClick del botón de añadir a favorito, la cual hace una petición al
     * PATCH de clubs para actualizar el seleccionado.
     */
    const addToFavorite = (clubID: string, isFavorite: boolean) => {
        const body = {
            favorite: !isFavorite,
            clubID,
        };
        updateClub(body).then((clubUpdated: ClubsItems) => {
            onUpdateClub(clubUpdated);
        });
    };

    return (
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
            {clubs?.map((club: ClubsItems, key: number) => (
                <Center key={key} py={6} display={'inline-block'} width={['400px']}>
                    <Box maxW={'340px'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
                        <Image h={'120px'} w={'full'} src={club.avatar} objectFit={'cover'} />
                        <Flex justify={'center'} mt={-12}>
                            <Avatar
                                size={'xl'}
                                src={club.avatar}
                                css={{
                                    border: '2px solid white',
                                }}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    {club.name}
                                </Heading>
                                <Text color={'gray.500'}>{club.foundationDate}</Text>
                            </Stack>

                            <Button
                                type="submit"
                                w={'full'}
                                mt={8}
                                bg={'#151f21'}
                                color={'white'}
                                rounded={'md'}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}
                                onClick={() => addToFavorite(club.id, club.favorite)}
                            >
                                {club.favorite ? 'Added' : 'Add to favorite'}
                            </Button>
                        </Box>
                    </Box>
                </Center>
            ))}
        </Flex>
    );
};

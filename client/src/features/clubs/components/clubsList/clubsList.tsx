import React from 'react';
import { ClubsItems } from '../../clubsTypes';
import { Box, Flex, Image, Center, Avatar, Heading, Stack, Text, Switch, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { updateClub } from '../../clubsService';
import { StarIcon } from '@chakra-ui/icons';
import { showResponseMessage } from '../../../../app/utils/responseHandler';
import { formatDates } from '../../../../app/utils/formatDates';
import { ClubsListProps } from '../../clubsTypes';
/**
 *
 * @param props
 * @returns
 */
export const ClubsList = (props: ClubsListProps): JSX.Element => {
    let { clubs, onUpdateClub } = props;
    const toast = useToast();
    /**
     *
     * @param clubID
     * @param isFavorite
     * Function in charge of handling the onClick event of the add to favorite button, which makes a request to the PATCH of clubs to update the selected one.
     */
    const addToFavorite = (clubID: string, isFavorite: boolean): void => {
        const body = {
            favorite: !isFavorite,
            clubID,
        };
        updateClub(body).then((clubUpdated: ClubsItems): void => {
            onUpdateClub(clubUpdated);
            if (clubUpdated.id) {
                const { type, message } = showResponseMessage({ status: 200, message: 'Saved correctly' });
                toast({
                    title: message,
                    status: type,
                    duration: 9000,
                    isClosable: true,
                    position: 'bottom-left',
                });
            }
        });
    };

    return (
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
            {clubs?.map(
                (club: ClubsItems, key: number): JSX.Element => (
                    <Center key={key} py={6} display={'inline-block'} width={['400px']}>
                        <Box maxW={'340px'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} borderRadius={'none'}>
                            <StarIcon margin={'10px'} position={'absolute'} color={club.favorite ? '#ECC94B' : 'gray.300'} />
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
                                    <Text color={'gray.500'}>{formatDates(club.foundationDate)}</Text>
                                </Stack>

                                <Stack direction={'row'} justify={'center'} spacing={6}>
                                    <Stack spacing={0} align={'center'}>
                                        <FormControl>
                                            <FormLabel fontWeight={600}>{club.favorite ? 'Remove from favorites' : 'Add to favorites'}</FormLabel>
                                            <Center>
                                                <Switch onChange={() => addToFavorite(club.id, club.favorite)} isChecked={club.favorite ? true : false} />
                                            </Center>
                                        </FormControl>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Center>
                )
            )}
        </Flex>
    );
};

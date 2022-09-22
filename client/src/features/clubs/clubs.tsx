import React, { useEffect, useState } from 'react';
import { Pagination } from '../../app/components/pagination/pagination';
import { ClubsList } from './components/clubsList/clubsList';
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Progress } from '@chakra-ui/react';
import { CLUBS_SEARCH_DEFAULT_PARAMS, CLUBS_DEFAULT_RESPONSE } from './clubsConsts';
import { useSetSearchValues } from './hooks/useSetSearchValues/useSetSearchValues';
import { ClubsResponse } from './clubsTypes';
import { Search2Icon, SmallCloseIcon, StarIcon } from '@chakra-ui/icons';
import { NoClubsView } from './components/noClubsView/noClubsView';
import { useUpdateClub } from './hooks/useUpdateClub/useUpdateClub';
import { useFetchClubs } from './hooks/useFetchClubs/useFetchClubs';

export const Clubs = (): JSX.Element => {
    /**
     * clubsResponse is the response from the get call to the /clubs api.
     */
    const [clubsResponse, setClubsResponse] = useState<ClubsResponse>(CLUBS_DEFAULT_RESPONSE);
    /**
     * Custom hook that we use to control the state of each filter of the clubs list.
     */
    const { callbackPagination, handleFieldChange, handleChangeFavorite, searchValues, loading, setLoading, cache, resetSeatchValues } = useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS);
    /**
     * Custom hook that we use to update the clubs.
     */
    const { onUpdateClub } = useUpdateClub({ clubsResponse, setClubsResponse, favorite: searchValues.favorite });
    /**
     * Custom hook that we use to bring a list of clubs.
     */
    const { fetchClubs } = useFetchClubs({ searchValues, cache, setClubsResponse, setLoading });
    /**
     * Hook that is triggered every time a parameter that can modify the /clubs query is modified, returning it has to do. If the favorites filter is active, it is done without cache, otherwise it isuses the memoize service for caching
     */
    useEffect((): void => {
        fetchClubs();
    }, [searchValues]);

    return (
        <Box m={4}>
            <Box h={'10px'} m={4}>
                {loading && <Progress size={'xs'} isIndeterminate />}
            </Box>
            <Flex justifyContent={'center'}>
                <InputGroup maxWidth={['66%', '50%']}>
                    <InputLeftElement pointerEvents={'none'} children={<Search2Icon color={'gray.300'} />} />
                    <Input aria-label={'Search club input'} borderRadius={'none'} placeholder={'Search'} onChange={handleFieldChange} value={searchValues.name_like} />
                    {searchValues.name_like && <InputRightElement cursor={'pointer'} children={<SmallCloseIcon color={'gray.300'} />} onClick={resetSeatchValues} />}
                </InputGroup>
                <Button aria-label={'Favorites filter button'} onClick={handleChangeFavorite} borderRadius={'none'}>
                    <StarIcon color={searchValues.favorite ? '#ECC94B' : 'black'} />
                </Button>
            </Flex>
            {clubsResponse.total === 0 && !loading && <NoClubsView searchInputValue={searchValues.name_like} />}
            {clubsResponse.total !== 0 && <ClubsList updateClub={onUpdateClub} clubs={clubsResponse.results} />}
            <Flex justifyContent={'center'}>
                <Pagination onClick={callbackPagination} totalPages={Math.ceil(clubsResponse.total / searchValues.limit)} />
            </Flex>
        </Box>
    );
};

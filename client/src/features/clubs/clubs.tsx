import React, { useEffect, useState } from 'react';
import { getClubsWithCache, getClubsWithoutCache } from './clubsService';
import { Pagination } from '../../app/components/pagination/pagination';
import { ClubsList } from './components/clubsList/clubsList';
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Progress } from '@chakra-ui/react';
import { CLUBS_SEARCH_DEFAULT_PARAMS, CLUBS_DEFAULT_RESPONSE } from './clubsConsts';
import { useSetSearchValues } from './hooks/useSetSearchValues';
import { ClubsItems, ClubsResponse } from './clubsTypes';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';
import { NoClubsView } from './components/noClubsView/noClubsView';
import { formatClubsUpdateCheck, formatClubsDeleteFromFavs } from './utils/formatClubs';

export const Clubs = (): JSX.Element => {
    /**
     * clubsResponse is the response from the get call to the /clubs api.
     */
    const [clubsResponse, setClubsResponse] = useState<ClubsResponse>(CLUBS_DEFAULT_RESPONSE);
    /**
     * Custom hook that we use to control the state of each filter of the clubs list.
     */
    const { callbackPagination, handleFieldChange, handleChangeFavorite, searchValues, loading, setLoading, cache } = useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS);
    /**
     * Hook that is triggered every time a parameter that can modify the /clubs query is modified, returning it has to do. If the favorites filter is active, it is done without cache, otherwise it isuses the memoize service for caching
     */
    useEffect((): void => {
        const { offset, limit, name_like, favorite } = searchValues;
        if (cache) {
            getClubsWithCache(offset, limit, name_like, favorite).then((res: ClubsResponse): void => {
                setClubsResponse(res);
                setLoading(false);
            });
        } else {
            getClubsWithoutCache({ offset, limit, name_like, favorite }).then((res: ClubsResponse): void => {
                setClubsResponse(res);
                setLoading(false);
            });
        }
    }, [searchValues]);
    /**
     * Function that is triggered every time filtering by favorites and setting defaultPage to 0
     */
    const onClickFavorites = (): void => {
        handleChangeFavorite();
    };
    /**
     *
     * @param clubUpdated
     * Function that receives by props the child component of the list the modifications of any of the clubs and calls formatClubs utility.
     */
    const onUpdateClub = (clubUpdated: ClubsItems): void => {
        const { favorite } = searchValues;
        if (favorite) {
            const { results, total }: ClubsResponse = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
            setClubsResponse({ ...clubsResponse, results, total });
        } else {
            const clubs: ClubsItems[] = formatClubsUpdateCheck(clubUpdated, clubsResponse);
            setClubsResponse({ ...clubsResponse, results: clubs });
        }
        //
    };

    return (
        <Box m={4}>
            <Box h={'10px'} m={4}>
                {loading && <Progress size={'xs'} isIndeterminate />}
            </Box>
            <Flex justifyContent={'center'}>
                <InputGroup maxWidth={['66%', '50%']}>
                    <InputLeftElement pointerEvents={'none'} children={<Search2Icon color={'gray.300'} />} />
                    <Input aria-label={'Search club input'} borderRadius={'none'} placeholder={'Search'} onChange={handleFieldChange} />
                </InputGroup>
                <Button aria-label={'Favorites filter button'} onClick={onClickFavorites} borderRadius={'none'}>
                    <StarIcon color="#ECC94B" />
                </Button>
            </Flex>
            {clubsResponse.total === 0 && !loading && <NoClubsView searchInputValue={searchValues.name_like} />}
            {clubsResponse.total !== 0 && <ClubsList onUpdateClub={onUpdateClub} clubs={clubsResponse.results} />}
            <Flex justifyContent={'center'}>
                <Pagination onClick={callbackPagination} totalPages={Math.ceil(clubsResponse.total / searchValues.limit)} />
            </Flex>
        </Box>
    );
};

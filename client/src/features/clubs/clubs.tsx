import React, { useEffect, useState } from 'react';
import { getClubs } from './clubsService';
import { Pagination } from '../../app/components/pagination/pagination';
import { ClubsList } from './clubsList/clubsList';
import { Box, Button, Input } from '@chakra-ui/react';
import { CLUBS_SEARCH_DEFAULT_PARAMS } from './clubsConsts';
import { useSetSearchValues } from './hooks/useSetSearchValues';

/**
 *
 * @returns
 */

export const Clubs = () => {
    const [defaultPage, setDefaultPage] = useState(0);
    const [clubsResponse, setClubsResponse] = useState({
        results: [],
        total: 0,
    });
    const [callbackPagination, handleFieldChange, handleChangeFavorite, searchValues] = useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS);

    useEffect(() => {
        const { offset, limit, name_like, favorite } = searchValues;
        getClubs({ offset, limit, name_like, favorite }).then((res) => {
            setClubsResponse(res);
        });
    }, [searchValues, defaultPage]);

    const onClickFavorites = () => {
        handleChangeFavorite();
        setDefaultPage(0);
    };

    return (
        <Box margin={'20px'}>
            <Input onChange={handleFieldChange} />
            <Button onClick={onClickFavorites}>See favorites</Button>
            <ClubsList clubs={clubsResponse.results}></ClubsList>
            <Pagination onClick={callbackPagination} totalPages={Math.ceil(clubsResponse.total / 6)}></Pagination>
        </Box>
    );
};

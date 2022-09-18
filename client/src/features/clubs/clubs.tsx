import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getClubsFetch } from './clubsSlice';
import { Pagination } from '../../app/components/pagination/pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ClubsList } from './clubsList/clubsList';
import { Button, Input } from '@chakra-ui/react';
import { CLUBS_SEARCH_DEFAULT_PARAMS } from './clubsConsts';
import { useSetSearchValues } from './hooks/useSetSearchValues';

/**
 *
 * @returns
 */
export const Clubs = () => {
    const dispatch = useAppDispatch();
    const { clubs, total } = useSelector((state: RootState) => state.clubs);
    const [callbackPagination, handleFieldChange, handleChangeFavorite, searchValues] = useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS);

    if (total === 0 && searchValues.favorite) {
        handleChangeFavorite();
    }

    useEffect(() => {
        const { offset, limit, name_like, favorite } = searchValues;
        dispatch(getClubsFetch({ offset, limit, name_like, favorite }));
    }, [searchValues]);

    return (
        <div>
            <ClubsList clubs={clubs}></ClubsList>
            <Button onClick={handleChangeFavorite}>See favorites</Button>
            <Pagination onClick={callbackPagination} total={total}></Pagination>
        </div>
    );
};

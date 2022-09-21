import React, { useState } from 'react';
import { ClubsParams, UseSetSearchValuesReturnType } from '../clubsTypes';

/**
 *
 * @param initialState
 * @returns Custom hook to control the status of club filters.
 */
export const useSetSearchValues = (initialState: ClubsParams): UseSetSearchValuesReturnType => {
    const [searchValues, setSearchValues] = useState<ClubsParams>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const [cache, setCache] = useState<boolean>(true);
    /**
     *
     * @param offset
     * Function that updates the offset for pagination.
     */
    const callbackPagination = (offset: number): void => {
        setLoading(true);
        setCache(true);
        setSearchValues({
            ...searchValues,
            offset: offset,
        });
    };

    /**
     *
     * @param event
     * It is executed every time the user enters a character in the debounce filter.
     */
    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLoading(true);
        setCache(true);
        setSearchValues({
            ...searchValues,
            name_like: event.target.value,
        });
    };

    /**
     * Function that is activated by the favorites button.
     */
    const handleChangeFavorite = (): void => {
        setLoading(true);
        setCache(false);
        setSearchValues({
            ...searchValues,
            offset: 0,
            limit: !searchValues.favorite ? 10 : 6,
            favorite: !searchValues.favorite,
        });
    };
    return { callbackPagination, handleFieldChange, handleChangeFavorite, searchValues, setSearchValues, setLoading, loading, cache, setCache } as const;
};

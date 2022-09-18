import React, { useState } from 'react';
import { ClubsParams } from '../clubsTypes';

export const useSetSearchValues = (initialState: ClubsParams) => {
    const [searchValues, setSearchValues] = useState<ClubsParams>(initialState);
    const callbackPagination = (offset: number) => {
        setSearchValues({
            ...searchValues,
            offset: offset,
        });
    };

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValues({
            ...searchValues,
            name_like: event.target.value,
        });
    };

    const handleChangeFavorite = () => {
        setSearchValues({
            ...searchValues,
            favorite: !searchValues.favorite,
        });
    };
    return [callbackPagination, handleFieldChange, handleChangeFavorite, searchValues] as const;
};

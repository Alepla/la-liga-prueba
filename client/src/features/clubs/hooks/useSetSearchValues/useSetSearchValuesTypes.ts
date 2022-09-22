import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ClubsParams } from '../../clubsTypes';

export type UseSetSearchValuesReturnType = {
    searchValues: ClubsParams;
    loading: boolean;
    cache: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    callbackPagination: (offset: number) => void;
    handleFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeFavorite: () => void;
};

import { Dispatch, SetStateAction } from 'react';

export type ClubsParams = {
    offset: number;
    limit: number;
    name_like: string;
    favorite: boolean;
};

export type ClubsItems = {
    id: string;
    avatar: string;
    favorite: boolean;
    name: string;
    foundationDate: string;
};

export type ClubUpdateParams = {
    favorite: boolean;
    clubID: string;
};

export type ClubsResponse = {
    total: number;
    results: ClubsItems[];
};

export interface ClubsListProps {
    clubs: ClubsItems[];
    onUpdateClub: (club: ClubsItems) => void;
}

export interface UseSetSearchValuesReturnType {
    searchValues: ClubsParams;
    setSearchValues: Dispatch<SetStateAction<ClubsParams>>;
    callbackPagination: (offset: number) => void;
    handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeFavorite: () => void;
}

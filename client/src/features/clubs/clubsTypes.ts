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

export type ClubsListProps = {
    clubs: ClubsItems[];
    updateClub: (clubID: string, isFavorite: boolean) => void;
};

export type UseSetSearchValuesReturnType = {
    searchValues: ClubsParams;
    loading: boolean;
    cache: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    callbackPagination: (offset: number) => void;
    handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeFavorite: () => void;
};

export type ClubsNoResultsProps = {
    searchInputValue: string;
};

export type UseFetchClubsProps = {
    searchValues: ClubsParams;
    cache: boolean;
    setClubsResponse: React.Dispatch<React.SetStateAction<ClubsResponse>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
};

export type UseFetchClubsReturnType = {
    fetchClubs: () => void;
};

export type UseUpdateClubProps = {
    favorite: boolean;
    clubsResponse: ClubsResponse;
    setClubsResponse: React.Dispatch<React.SetStateAction<ClubsResponse>>;
};

export type UseUpdateClubReturnType = {
    onUpdateClub: (clubID: string, isFavorite: boolean) => void;
};

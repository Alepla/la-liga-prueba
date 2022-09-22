import { ChangeEvent, Dispatch, SetStateAction } from 'react';

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
    status?: number;
};

export type ClubsListProps = {
    clubs: ClubsItems[];
    updateClub: (clubID: string, isFavorite: boolean) => void;
};

export type ClubsNoResultsProps = {
    searchInputValue: string;
};

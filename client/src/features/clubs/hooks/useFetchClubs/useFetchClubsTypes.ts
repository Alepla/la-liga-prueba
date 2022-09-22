import { Dispatch, SetStateAction } from 'react';
import { ClubsParams, ClubsResponse } from '../../clubsTypes';

export type UseFetchClubsProps = {
    searchValues: ClubsParams;
    cache: boolean;
    setClubsResponse: Dispatch<SetStateAction<ClubsResponse>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
};

export type UseFetchClubsReturnType = {
    fetchClubs: () => void;
};

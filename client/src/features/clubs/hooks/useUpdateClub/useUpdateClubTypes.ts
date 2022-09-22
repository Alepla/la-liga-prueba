import { Dispatch, SetStateAction } from 'react';
import { ClubsResponse } from '../../clubsTypes';

export type UseUpdateClubProps = {
    favorite: boolean;
    clubsResponse: ClubsResponse;
    setClubsResponse: Dispatch<SetStateAction<ClubsResponse>>;
};

export type UseUpdateClubReturnType = {
    onUpdateClub: (clubID: string, isFavorite: boolean) => void;
};

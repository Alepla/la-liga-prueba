import { getClubsWithCache, getClubsWithoutCache } from '../clubsService';
import { ClubsResponse, UseFetchClubsProps, UseFetchClubsReturnType } from '../clubsTypes';

export const useFetchClubs = (props: UseFetchClubsProps): UseFetchClubsReturnType => {
    const { searchValues, cache, setClubsResponse, setLoading } = props;
    /**
     *
     */
    const fetchClubs = () => {
        const { offset, limit, name_like, favorite } = searchValues;
        if (cache) {
            getClubsWithCache(offset, limit, name_like, favorite).then((res: ClubsResponse): void => {
                setClubsResponse(res);
                setLoading(false);
            });
        } else {
            getClubsWithoutCache({ offset, limit, name_like, favorite }).then((res: ClubsResponse): void => {
                setClubsResponse(res);
                setLoading(false);
            });
        }
    };

    return { fetchClubs } as const;
};

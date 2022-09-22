import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../../app/utils/responseHandler/responseHandler';
import { getClubsWithCache, getClubsWithoutCache } from '../../clubsService';
import { ClubsResponse } from '../../clubsTypes';
import { UseFetchClubsProps, UseFetchClubsReturnType } from './useFetchClubsTypes';

export const useFetchClubs = (props: UseFetchClubsProps): UseFetchClubsReturnType => {
    const { searchValues, cache, setClubsResponse, setLoading } = props;
    const toast = useToast();

    /**
     * Function in charge of bringing the list of clubs.
     */
    const fetchClubs = (): void => {
        const { offset, limit, name_like, favorite } = searchValues;
        /**
         * And depending on whether we are in favorites or not, we use the cache.
         */
        if (cache) {
            getClubsWithCache(offset, limit, name_like, favorite).then((res: ClubsResponse): void => {
                const { results, status } = res;
                if (results) setClubsResponse(res);
                else showToast(status!);
                setLoading(false);
            });
        } else {
            getClubsWithoutCache({ offset, limit, name_like, favorite }).then((res: ClubsResponse): void => {
                const { results, status } = res;
                if (results) setClubsResponse(res);
                else showToast(status!);
                setLoading(false);
            });
        }
    };

    /**
     *
     * @param status
     * An error message is displayed to the user in case something has gone wrong.
     */
    const showToast = (status: number): void => {
        const { type, resMessage } = showResponseMessage({ status: status });
        toast({
            title: resMessage,
            status: type,
            duration: 9000,
            isClosable: true,
            position: 'bottom-left',
        });
    };

    return { fetchClubs } as const;
};

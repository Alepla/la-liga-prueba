import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../app/utils/responseHandler/responseHandler';
import { getClubsWithCache, getClubsWithoutCache } from '../clubsService';
import { ClubsResponse, UseFetchClubsProps, UseFetchClubsReturnType } from '../clubsTypes';

export const useFetchClubs = (props: UseFetchClubsProps): UseFetchClubsReturnType => {
    const { searchValues, cache, setClubsResponse, setLoading } = props;
    const toast = useToast();

    /**
     *
     */
    const fetchClubs = () => {
        const { offset, limit, name_like, favorite } = searchValues;
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

    const showToast = (status: number) => {
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

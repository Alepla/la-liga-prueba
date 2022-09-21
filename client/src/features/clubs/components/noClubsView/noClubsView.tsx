import React from 'react';
import { Box, Flex, Center, FormControl, FormLabel } from '@chakra-ui/react';
import { ClubsNoResultsProps } from '../../clubsTypes';
/**
 *
 * @param props
 * @returns show a no results page
 */
export const NoClubsView = (props: ClubsNoResultsProps): JSX.Element => {
    let { searchInputValue } = props;

    return (
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
            <FormControl py={6}>
                <FormLabel textAlign={'center'} fontWeight={600}>
                    {!searchInputValue ? 'No results' : 'No results for the search: ' + searchInputValue}
                </FormLabel>
            </FormControl>
        </Flex>
    );
};

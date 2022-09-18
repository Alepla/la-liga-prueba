import React from 'react';
import { Box } from '@chakra-ui/react';
import { ClubsItems } from '../clubsTypes';

export interface ChildProps {
    clubs: ClubsItems[];
}

export const ClubsList = (props: ChildProps) => {
    console.log(props.clubs);
    return <Box></Box>;
};

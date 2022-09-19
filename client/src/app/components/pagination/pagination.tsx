import React, { useEffect } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useCounter } from './hooks/useCounter';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export interface ChildProps {
    onClick: (offset: number) => void;
    totalPages: number;
}

/**
 *
 * @param props
 * @returns Component in charge of controlling pagination.
 */
export const Pagination = (props: ChildProps) => {
    const { onClick, totalPages } = props;
    /**
     * Custom hook in charge of adding or subtracting pages.
     */
    const [restPage, plusPage, page] = useCounter(totalPages);

    /**
     * Hook responsible for sending the current page to the parent component.
     */
    useEffect(() => {
        onClick(page);
    }, [page]);

    return (
        <Box>
            <HStack spacing="14px">
                <Button onClick={restPage} disabled={page === 0} borderRadius={'none'}>
                    <ChevronLeftIcon boxSize={6} />
                </Button>
                <Button borderRadius={'none'} onClick={plusPage} disabled={page + 1 === totalPages || totalPages === 0}>
                    <ChevronRightIcon boxSize={6} />
                </Button>
                <Box>{`${page + 1} / ${totalPages == 0 ? 1 : totalPages}`}</Box>
            </HStack>
        </Box>
    );
};

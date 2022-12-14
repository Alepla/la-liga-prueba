import React, { useEffect, useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useCounter } from '../../hooks/useCounter/useCounter';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { PaginationChildProps } from './paginationTypes';
/**
 *
 * @param props
 * @returns Component in charge of controlling pagination.
 */
export const Pagination = (props: PaginationChildProps): JSX.Element => {
    const { onClick, totalPages = 0 } = props;
    const [numberOfPages, setNumberOfPages] = useState<number>(0);
    /**
     * Custom hook in charge of adding or subtracting pages.
     */
    const { decrement, increment, count, reset } = useCounter(0);

    /**
     * Hook responsible for sending the current page to the parent component
     */
    useEffect((): void => {
        onClick(count);
    }, [count]);

    /**
     * Hook responsible of check if the total number of pages has changed to reset the counter.
     */
    useEffect((): void => {
        if (totalPages !== numberOfPages) {
            reset();
            setNumberOfPages(totalPages);
        }
    }, [totalPages]);

    return (
        <Box>
            {totalPages !== 0 && (
                <HStack spacing="14px">
                    <Button aria-label={'Button pagination left'} onClick={decrement} disabled={count === 0} borderRadius={'none'}>
                        <ChevronLeftIcon boxSize={6} />
                    </Button>
                    <Button aria-label={'Button pagination right'} borderRadius={'none'} onClick={increment} disabled={count + 1 === totalPages || totalPages === 0}>
                        <ChevronRightIcon boxSize={6} />
                    </Button>
                    <Box aria-label={'Pagination counter'}>{`${count + 1} / ${totalPages}`}</Box>
                </HStack>
            )}
        </Box>
    );
};

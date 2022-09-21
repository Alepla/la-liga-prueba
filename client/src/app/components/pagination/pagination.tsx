import React, { useEffect, useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useCounter } from '../../hooks/useCounter';
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
export const Pagination = (props: ChildProps): JSX.Element => {
    const { onClick, totalPages = 0 } = props;
    /**
     * Custom hook in charge of adding or subtracting pages.
     */
    const [numberOfPages, setNumberOfPages] = useState<number>(0);
    const { decrement, increment, count, reset } = useCounter(0);

    /**
     * Hook responsible for sending the current page to the parent component.
     */
    useEffect(() => {
        onClick(count);
        if (totalPages !== numberOfPages) {
            reset();
            setNumberOfPages(() => totalPages);
        }
    }, [count, totalPages]);

    return (
        <Box>
            <HStack spacing="14px">
                <Button onClick={decrement} disabled={count === 0} borderRadius={'none'}>
                    <ChevronLeftIcon boxSize={6} />
                </Button>
                <Button borderRadius={'none'} onClick={increment} disabled={count + 1 === totalPages || totalPages === 0}>
                    <ChevronRightIcon boxSize={6} />
                </Button>
                <Box>{`${count + 1} / ${totalPages == 0 ? 1 : totalPages}`}</Box>
            </HStack>
        </Box>
    );
};

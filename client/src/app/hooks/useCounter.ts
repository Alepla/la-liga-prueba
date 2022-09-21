import React, { useState } from 'react';
import { UseCounterReturnType } from '../types/hooksTypes';

/**
 *
 * @param initialValue
 * @returns Custom hook in charge of increment or decrement a counter.
 */
export const useCounter = (initialValue?: number): UseCounterReturnType => {
    const [count, setCount] = useState<number>(initialValue || 0);

    const decrement = (): void => setCount((prev) => prev - 1);

    const increment = (): void => setCount((prev) => prev + 1);

    const reset = (): void => setCount(initialValue || 0);

    return { decrement, increment, reset, setCount, count } as const;
};

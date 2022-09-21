import { Dispatch, SetStateAction } from 'react';

export interface UseCounterReturnType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: Dispatch<SetStateAction<number>>;
}

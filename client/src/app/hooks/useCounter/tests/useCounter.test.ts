import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../useCounter';

describe('testing useCounter custom hook', () => {
    it('increment should plus one', async () => {
        const { result } = renderHook(() => useCounter(0));
        expect(result.current.count).toBe(0);
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('decrement should rest one', async () => {
        const { result } = renderHook(() => useCounter(0));
        act(() => {
            result.current.increment();
            result.current.decrement();
            renderHook(() => useCounter(0));
        });
        expect(result.current.count).toBe(0);
    });

    it('reset should restet the counter', async () => {
        const { result } = renderHook(() => useCounter(0));
        act(() => {
            result.current.increment();
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    });
});

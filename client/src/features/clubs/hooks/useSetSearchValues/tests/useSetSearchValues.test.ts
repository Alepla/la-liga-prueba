import { act, renderHook } from '@testing-library/react';
import { useSetSearchValues } from '../useSetSearchValues';
import { CLUBS_SEARCH_DEFAULT_PARAMS } from '../../../clubsConsts';
import { ChangeEvent } from 'react';

describe('testing useSetSearchValues custom hook', () => {
    it('after trigger callbackPagination offset should be 2', async () => {
        const { result } = renderHook(() => useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS));

        expect(result.current.searchValues.offset).toBe(0);
        act(() => {
            result.current.callbackPagination(2);
        });
        expect(result.current.searchValues.offset).toBe(2);
    });
    it('after trigger handleFieldChange name_like should be test', async () => {
        const { result } = renderHook(() => useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS));
        const event = {
            target: {
                value: 'test',
            },
        } as ChangeEvent<HTMLInputElement>;
        expect(result.current.searchValues.name_like).toBe('');
        act(() => {
            result.current.handleFieldChange(event);
        });
        expect(result.current.searchValues.name_like).toBe(event.target.value);
    });
    it('after trigger handleChangeFavorite favorite should be true', async () => {
        const { result } = renderHook(() => useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS));

        expect(result.current.searchValues.favorite).toBe(false);
        act(() => {
            result.current.handleChangeFavorite();
        });
        expect(result.current.searchValues.favorite).toBe(true);
    });
    it('after trigger handleChangeFavorite in advanced page offset should be 0 again', async () => {
        const { result } = renderHook(() => useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS));

        act(() => {
            result.current.callbackPagination(2);
            result.current.handleChangeFavorite();
        });
        expect(result.current.searchValues.offset).toBe(0);
    });
});

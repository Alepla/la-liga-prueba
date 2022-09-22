import { act, renderHook } from '@testing-library/react';
import { useFields } from '../useFields';
import { LOGIN_CONF } from '../../../loginConsts';
import { ChangeEvent } from 'react';

describe('testing useFields custom hook', () => {
    it('getErrors return that email and password are required', async () => {
        const { result } = renderHook(() => useFields(LOGIN_CONF));

        act(() => {
            result.current.getErrors();
        });
        expect(result.current.errors.email).toBe('The email is required');
        expect(result.current.errors.password).toBe('The password is required');
    });
    it('handleFieldsChange saves email in the state', async () => {
        const { result } = renderHook(() => useFields(LOGIN_CONF));

        const event = {
            target: {
                id: 'email',
                value: 'email@test.com',
            },
        } as ChangeEvent<HTMLInputElement>;
        act(() => {
            result.current.handleFieldChange(event);
        });
        expect(result.current.fields.email.value).toBe(event.target.value);
    });

    it('handleFieldsChange saves password in the state', async () => {
        const { result } = renderHook(() => useFields(LOGIN_CONF));

        const event = {
            target: {
                id: 'password',
                value: 'password',
            },
        } as ChangeEvent<HTMLInputElement>;
        act(() => {
            result.current.handleFieldChange(event);
        });
        expect(result.current.fields.password.value).toBe(event.target.value);
    });

    it('handleInputVisibility should be set password true', async () => {
        const { result } = renderHook(() => useFields(LOGIN_CONF));
        act(() => {
            result.current.handleInputVisibility();
        });
        expect(result.current.passwdVisible).toBe(true);
    });
});

import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../app/utils/testUtils';
import { Login } from '../login';

describe('testing login', () => {
    const setup = () => {
        const utils = renderWithProviders(<Login />);
        const emailLabel = utils.getByText(/email/i);
        const passwordLabel = utils.getByText(/password/i);
        const emailInput = utils.getByLabelText('Email input') as HTMLInputElement;
        const passwordInput = utils.getByLabelText('Password input') as HTMLInputElement;
        const submitButton = utils.getByRole('button', { name: /Sign in/i });
        return {
            emailLabel,
            passwordLabel,
            emailInput,
            passwordInput,
            submitButton,
            ...utils,
        };
    };
    it('the email is required error does not appear', async () => {
        const { emailLabel } = setup();

        expect(emailLabel).toBeInTheDocument();
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument();
    });
    it('the password is required error does not appear', async () => {
        const { passwordLabel } = setup();

        expect(passwordLabel).toBeInTheDocument();
        expect(screen.queryByText(/the password is required/i)).not.toBeInTheDocument();
    });
    it('email and password does not exist and shows is required after submit button is clicked', async () => {
        const { submitButton } = setup();

        fireEvent.click(submitButton);
        expect(screen.getByText(/the email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/the password is required/i)).toBeInTheDocument();
    });

    it('the email input is filled, but is not valid', async () => {
        const { emailInput, submitButton } = setup();

        fireEvent.change(emailInput, { target: { value: 'badEmail' } });
        fireEvent.click(submitButton);
        expect(emailInput.value).toBe('badEmail');
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument();
        expect(screen.getByText(/the email must be valid/i)).toBeInTheDocument();
    });

    it('the email input is filled and is valid', async () => {
        const { emailInput, submitButton } = setup();

        fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
        fireEvent.click(submitButton);
        await waitFor(() => expect(emailInput.value).toBe('email@test.com'));
        expect(screen.queryByText(/the email must be valid/i)).not.toBeInTheDocument();
        expect(screen.getByText(/the password is required/i)).toBeInTheDocument();
    });

    it('a valid password is added and the error message disappears', async () => {
        const { passwordInput } = setup();

        fireEvent.change(passwordInput, { target: { value: 'password' } });
        await waitFor(() => expect(passwordInput.value).toBe('password'));
        expect(screen.queryByText(/the password is required/i)).not.toBeInTheDocument();
    });
    it('the form submission button is clicked and the redux status is updated', async () => {
        const { store, emailInput, passwordInput, submitButton } = setup();

        fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);
        await waitFor(() => expect(store.getState().login.isProcessingRequest).toBe(true));
    });
});

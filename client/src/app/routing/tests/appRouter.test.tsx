import { screen } from '@testing-library/react';
import { history } from '../../../helpers/history';
import { AppRouter } from '../appRouter';
import { renderWithProviders } from '../../utils/testUtils';

describe('appRouter test', () => {
    it('should render login page', async () => {
        renderWithProviders(<AppRouter />);
        expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    });

    it('should render notFoundPage', () => {
        history.push('/some/bad/route');
        renderWithProviders(<AppRouter />);
        expect(screen.getByText(/404 - PAGE NOT FOUND/i)).toBeInTheDocument();
    });
});

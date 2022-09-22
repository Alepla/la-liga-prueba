import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../../app/utils/testUtils';
import { ClubsNoResultsProps } from '../../../clubsTypes';
import { NoClubsView } from '../noClubsView';

describe('testing noClubsView', () => {
    it('the info message should be No results for the search: a', async () => {
        const providerProps: ClubsNoResultsProps = { searchInputValue: 'a' };
        renderWithProviders(<NoClubsView searchInputValue={providerProps.searchInputValue} />);
        expect(screen.queryByText(/No results for the search: a/i)).toBeInTheDocument();
    });

    it('the info message should be No results', async () => {
        const providerProps: ClubsNoResultsProps = { searchInputValue: '' };
        renderWithProviders(<NoClubsView searchInputValue={providerProps.searchInputValue} />);
        expect(screen.queryByText(/No results/i)).toBeInTheDocument();
    });
});

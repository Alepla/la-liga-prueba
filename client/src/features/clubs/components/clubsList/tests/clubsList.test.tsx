import { renderWithProviders } from '../../../../../app/utils/testUtils';
import { screen } from '@testing-library/react';
import { ClubsListProps } from '../../../clubsTypes';
import { ClubsList } from '../clubsList';
import { providerPropsFalse, providerPropsTrue } from './clubsList.mock';

describe('testing clubsList', () => {
    const setup = (providerProps: ClubsListProps) => {
        const utils = renderWithProviders(<ClubsList clubs={providerProps.clubs} updateClub={providerProps.updateClub} />);
        return { ...utils };
    };
    it('if component receive clubs all the elements should be visible', async () => {
        setup(providerPropsFalse);
        expect(screen.getByLabelText('Club image') as HTMLInputElement).toBeInTheDocument();
        expect(screen.getByLabelText('Club avatar') as HTMLInputElement).toBeInTheDocument();
        expect(screen.getByLabelText('Club name') as HTMLInputElement).toBeInTheDocument();
        expect(screen.getByLabelText('Club date') as HTMLInputElement).toBeInTheDocument();
        expect(screen.getByLabelText('Club favorite text') as HTMLInputElement).toBeInTheDocument();
        expect(screen.getByLabelText('Update club switch') as HTMLInputElement).toBeInTheDocument();
    });

    it('if component receive favorite false the elements should be visiblshould apear remove text', async () => {
        setup(providerPropsTrue);
        expect(screen.queryByText(/Remove from favorites/i)).toBeInTheDocument();
    });

    it('if component receive favorite false the elements should be visiblshould apear remove text', async () => {
        setup(providerPropsFalse);
        expect(screen.queryByText(/Add to favorites/i)).toBeInTheDocument();
    });
});

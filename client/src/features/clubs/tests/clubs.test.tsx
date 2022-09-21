import { renderWithProviders } from '../../../app/utils/testUtils';
import { Clubs } from '../clubs';

describe('testing clubs', () => {
    const setup = () => {
        const utils = renderWithProviders(<Clubs />);
        const searchClubsInput = utils.getByLabelText('Search club input') as HTMLInputElement;
        const seeFavClubs = utils.getByLabelText('Favorites filter button') as HTMLInputElement;
        return {
            searchClubsInput,
            seeFavClubs,
            ...utils,
        };
    };
    it('the search and the filter button should be in the document', async () => {
        const { searchClubsInput, seeFavClubs } = setup();
        expect(searchClubsInput).toBeInTheDocument();
        expect(seeFavClubs).toBeInTheDocument();
    });
});

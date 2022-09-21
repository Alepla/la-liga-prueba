import { renderWithProviders } from '../../../app/utils/testUtils';
import { NotFoundPage } from '../notFoundPage';

describe('testing notFoundPage', () => {
    const setup = () => {
        const utils = renderWithProviders(<NotFoundPage />);
        const notFoundPageText = utils.getByText(/404 - PAGE NOT FOUND/i);
        const goBackButton = utils.getByRole('button', { name: /Go back/i });
        return {
            notFoundPageText,
            goBackButton,
            ...utils,
        };
    };
    it('the not found page message and the go back button should be in the page', async () => {
        const { notFoundPageText, goBackButton } = setup();
        expect(notFoundPageText).toBeInTheDocument();
        expect(goBackButton).toBeInTheDocument();
    });
});

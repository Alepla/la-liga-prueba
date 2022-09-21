import { renderWithProviders } from '../../../utils/testUtils';
import { NavBar } from '../navBar';

describe('testing navBar', () => {
    const setup = () => {
        const utils = renderWithProviders(<NavBar />);
        const logo = utils.getByLabelText('Logo de la liga') as HTMLInputElement;
        const submitButton = utils.getByRole('button', { name: /Log out/i });
        return {
            logo,
            submitButton,
            ...utils,
        };
    };
    it('the logo and the logout button should be in the document', async () => {
        const { logo, submitButton } = setup();
        expect(logo).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
});

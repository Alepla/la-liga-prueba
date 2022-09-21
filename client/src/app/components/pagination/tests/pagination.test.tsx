import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/testUtils';
import { Pagination } from '../pagination';
import { PaginationChildProps } from '../../../types/utilsTypes';

describe('testing pagination', () => {
    const setup = () => {
        const providerProps: PaginationChildProps = {
            onClick: jest.fn(),
            totalPages: 10,
        };
        const utils = renderWithProviders(<Pagination onClick={providerProps.onClick} totalPages={providerProps.totalPages} />);
        const buttonLeft = utils.getByLabelText('Button pagination left') as HTMLInputElement;
        const buttonRight = utils.getByLabelText('Button pagination right') as HTMLInputElement;
        const totalCount = utils.getByLabelText('Pagination counter') as HTMLInputElement;
        return {
            buttonLeft,
            buttonRight,
            totalCount,
            ...utils,
        };
    };
    it('the buttons should be in the document', async () => {
        const { buttonLeft, buttonRight, totalCount } = setup();
        expect(buttonLeft).toBeInTheDocument();
        expect(buttonRight).toBeInTheDocument();
        expect(totalCount).toBeInTheDocument();
        expect(screen.getByText('1 / 10')).toBeInTheDocument();
    });
    it('the button right should increment the totalCount', async () => {
        const { buttonRight } = setup();
        fireEvent.click(buttonRight);
        expect(screen.getByText('2 / 10')).toBeInTheDocument();
    });
    it('the button left should decrement the totalCount', async () => {
        const { buttonLeft, buttonRight } = setup();
        fireEvent.click(buttonRight);
        fireEvent.click(buttonLeft);
        expect(screen.getByText('1 / 10')).toBeInTheDocument();
    });
});

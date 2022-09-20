import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Login } from '../login';
import * as reactRedux from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));
describe('Test TargetComponent', () => {
    /* 
    beforeEach(() => {
        useSelectorMock.mockImplementation((selector: any) => selector(mockStore));
    })
    afterEach(() => {
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;

    const mockStore = {
        thing1: 'this is thing1',
        somewhere: {
            thing2: 'and I am thing2!',
        }
    };*/

    it('LOgin', () => {});
});
/* test('loads and displays greeting', async () => {
    render(<Login />);

    // ACT
    await userEvent.click(screen.getByText('Load Greeting'));
    await screen.findByRole('heading');

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there');
    expect(screen.getByRole('button')).toBeDisabled();
});
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { removeTokens } from '../../app/services/localStorage';
import { RootState } from '../../app/store';
import { getClubsFetch } from './clubsSlice';

/**
 *
 * @returns
 */
export const Clubs = () => {
    const dispatch = useAppDispatch();

    const onSubmit = () => dispatch(getClubsFetch());

    return (
        <div>
            <p>clubs page</p>
            <button onClick={onSubmit}>Remove token</button>
        </div>
    );
};

export default Clubs;

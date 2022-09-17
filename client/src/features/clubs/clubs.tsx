import React from 'react';
import { removeTokens } from '../../app/services/localStorage';

/**
 *
 * @returns
 */
export const Clubs = () => {
    return (
        <div>
            <p>clubs page</p>
            <button onClick={removeTokens}>Remove token</button>
        </div>
    );
};

export default Clubs;

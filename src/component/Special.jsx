import React, { useContext } from 'react';
import { RingContext } from './Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1>Special</h1>
            {ring && <p><small>{ring}</small></p>}
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Special;
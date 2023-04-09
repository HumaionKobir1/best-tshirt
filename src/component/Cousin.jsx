import React, { useContext } from 'react';
import { RingContext } from './Grandpa/Grandpa';

const Cousin = ({children}) => {
    const ring = useContext(RingContext);
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1>Cousin</h1>
            <p><small>{children}</small></p>
            <small>{ring}</small>
        </div>
    );
};

export default Cousin;
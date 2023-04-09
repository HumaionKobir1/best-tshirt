import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1>Sister</h1>
            <p><small>Grandpa money: {money}</small> tk</p>
        </div>
    );
};

export default Sister;
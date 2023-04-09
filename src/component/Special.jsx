import React from 'react';

const Special = ({ring}) => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1>Special</h1>
            {ring && <p><small>{ring}</small></p>}
        </div>
    );
};

export default Special;
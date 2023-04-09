import React from 'react';

const Cousin = ({children}) => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1>Cousin</h1>
            <p><small>{children}</small></p>
        </div>
    );
};

export default Cousin;
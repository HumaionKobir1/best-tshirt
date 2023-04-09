import React from 'react';
import Special from './Special';

const MySelf = ({ring}) => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1 className='text-center mb-6'>My Self</h1>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;
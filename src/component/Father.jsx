import React from 'react';
import Brother from './Brother';
import Sister from './Sister';
import MySelf from './MySelf';

const Father = ({ring}) => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1 className='text-center mb-6'>Father</h1>
            <section className='flex gap-6 border-amber-500 p-3'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;
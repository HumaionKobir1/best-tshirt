import React from 'react';
import Father from '../Father';
import Uncle from '../Uncle';
import Aunty from '../Aunty';

const Grandpa = () => {
    const ring = 'Diamond';
    return (
        <div className='border-2 border-amber-500  p-5'>
            <h1 className='text-3xl text-center mb-8'>Grandpa</h1>
            <section className='flex gap-8 justify-center'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;
import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1 className='text-center mb-6'>Uncle</h1>
            <section className='flex gap-6 border-amber-500 p-3'>
                <Cousin>Nabil</Cousin>
                <Cousin>Kabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
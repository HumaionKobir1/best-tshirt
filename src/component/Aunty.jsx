import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1 className='text-center mb-6'>Aunty</h1>
            <section className='flex gap-6 border-amber-500 p-3'>
                <Cousin>Rina</Cousin>
                <Cousin>Mina</Cousin>
            </section>
        </div>
    );
};

export default Aunty;
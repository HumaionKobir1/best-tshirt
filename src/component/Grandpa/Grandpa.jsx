import React, { createContext, useState } from 'react';
import Father from '../Father';
import Uncle from '../Uncle';
import Aunty from '../Aunty';
export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='border-2 border-amber-500  p-5'>
            <h1 className='text-3xl text-center mb-8'>Grandpa Has Money: {money} tk</h1>
            
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='GoldenRing'>
                    <section className='md:flex gap-8 justify-center'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create context and export
 * 2. Create a provider and pass a value
 * 3. use useContext to receive the value
 * */ 
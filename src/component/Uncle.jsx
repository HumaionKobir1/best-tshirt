import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border-2 border-amber-500 p-3'>
            <h1 className='text-center mb-6'>Uncle <small>{money} tk</small></h1>
            <button onClick={()=> setMoney(money + 1000)} className='px-3 py-1 ml-28 bg-orange-700 text-white hover:bg-orange-400 rounded-lg'>Send 1000 tk</button>
            <section className='flex gap-6 border-amber-500 p-3'>
                <Cousin>Nabil</Cousin>
                <Cousin>Kabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
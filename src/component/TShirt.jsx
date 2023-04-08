import React from 'react';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='border-2 rounded-lg p-2 grid justify-center text-center gap-3'>
            <img className='rounded-lg h-64' src={picture} alt="" />
            <h3 className='text-2xl'>{name}</h3>
            <p className='font-semibold'>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='bg-emerald-500 rounded-xl px-4 py-2 w-full h-12'>Buy Now</button>
        </div>
    );
};

export default TShirt;
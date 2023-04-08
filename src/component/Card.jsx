import React from 'react';
import TShirt from './TShirt';

const Card = ({cart, handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div className='p-4 border-2'>
            <h1 className='text-3xl font-semibold text-center'>Order Summary: {cart.length}</h1>
            {
                cart.map(tshirt => <h1 className='text-xl font-bold' key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}   className='px-2 py-1 bg-yellow-500 rounded-lg'>X</button></h1>)
            }
        </div>
    );
};

export default Card;
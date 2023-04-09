import React from 'react';
import TShirt from './TShirt';

const Card = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p className='bg-green-300 rounded-lg p-2 text-white text-center'>Please add some Product</p>
    }
    else{
        message = <p className='bg-purple-700 rounded-xl p-2 text-white'>Wow great...successfully added product</p>
    }
    return (
        <div className='p-4 border-2'>
            
            <h1 className='text-3xl font-semibold text-center mt-8'>Order Summary: {cart.length}</h1>
            <br />

            {/* conditional rendering-2 */}
            {/* {cart.length > 2 ? <span>Buy another some product and get your offer</span> : <span></span>} */}

            {message}

            <div className='mb-5 mt-5'>
                {
                    cart.map(tshirt => <h1 className='text-xl font-bold' key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}   className='px-2 py-1 bg-yellow-500 rounded-lg'>X</button></h1>)
                }
            </div>
            {
                cart.length === 2 && <p className='p-2 bg-fuchsia-600 rounded-lg font-semibold text-xl'>Double bonanza!!</p>
            }
            {/* {
                cart.length === 3 || <h3>3 ta to hoilo na re bondhu</h3>
            } */}
        </div>
    );
};

export default Card;

/**
 * CONDITIONAL RENDERING 
 * 1. USE if or else if to set a variable that will contain an element, component
 * 2. ternary operator: condition ? 'for tru' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 */

/*
1. CONDITIONAL CSS 
*/ 
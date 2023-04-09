import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Card from './Card';
import {toast} from 'react-toastify';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast("You have already added")
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }
    
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='grid grid-cols-12 gap-8 container mx-auto'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:col-span-9 col-span-full gap-8'>
            
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='md:col-span-3 col-span-full'>
                <Card
                cart = {cart}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></Card>
            </div>
        </div>
    );
};

export default Home;
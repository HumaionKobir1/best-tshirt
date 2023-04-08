import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Card from './Card';

const Home = () => {
    const tshirts = useLoaderData();
    
    const handleAddToCart = (tshirt) => {
        console.log(tshirt);
    } 
    return (
        <div className='grid grid-cols-12 gap-8 container mx-auto'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 col-span-9 gap-8'>
            
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='col-span-3'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex gap-8 justify-center text-xl font-bold mb-8'>
            <Link to = '/'>Home</Link>
            <Link to = 'about'>About</Link>
            <Link to = 'grandpa'>Grandpa</Link>
            <Link to = 'contact'>Contact</Link>
        </div>
    );
};

export default Header;
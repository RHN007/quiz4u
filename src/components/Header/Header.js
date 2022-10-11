import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex justify-between mt-10'>
            <div>
                <h1 className=' font-extrabold text-3xl'>QUIZ4U</h1>
            </div>
            <div className='font-bold text-lg  '>
            
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;
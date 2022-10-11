import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between mt-10'>
            <div>
                <h1 className='text-white font-extrabold text-3xl'>QUIZ2YOU</h1>
            </div>
            <div className='font-bold text-lg text-white '>
            <Link to='/home'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
        </div>
    );
};

export default Header;
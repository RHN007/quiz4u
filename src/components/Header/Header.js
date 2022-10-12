import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex justify-between p-5 bg-base-300 mt-0 sticky top-0'>
            <div>
                <Link to='/' className=' font-extrabold text-3xl text-blue-600'>QUIZ4U</Link>
            </div>
            <div className='font-bold text-lg flex flex-col md:flex-row md:content-center  '> 
            <NavLink className={({isActive})=> isActive ? undefined:'active'} to='/'>Topics</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            
            <NavLink to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
    );
};

export default Header;
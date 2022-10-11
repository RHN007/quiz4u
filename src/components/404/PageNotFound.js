import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/3828537.jpg'

const PageNotFound = () => {
    return (
        <div className=' flex-col  justify-center content-center '>

            <div className='flex justify-center '>
                <img src={img} width={600}  alt="" />
            </div>

            <div>
            <p className='text-white mt-10'>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
            <Link to='/home'><button className='text-white mt-10'>Return to home page</button></Link>
            </div>
            
        </div>
    );
};

export default PageNotFound;
import React from 'react';
import img from '../../images/worker-placing-blue-cube.jpg'

const Home = () => {
    return (
        <div className='flex mt-10 justify-between content-center '>
            <div className='p-24'> 
            <h2 className='text-white' >Show real <br /> <span className='text-white text-6xl font-bold'>Power of Your Mind</span></h2>
            </div>
            <div>
                <img className='rounded' src={img} width={600} alt="" />
            </div>
        </div>
    );
};

export default Home;
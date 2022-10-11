import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/worker-placing-blue-cube.jpg'
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <div >
            

            <div className='md:flex  md:justify-between md:content-center p-24 '>
            <div > 
            <h2  >Show real <br /> <span className=' text-8xl md:text-6xl font-bold'>Power of Your Mind</span></h2>
            </div>
            <div className='ml-10 md:ml-0'>
                <img className='rounded' src={img} width={300} alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
           {
                topics.data.map(topic => <Topics key={topic.id} topic={topic}></Topics> )
            }
           </div>
        </div>
    );
};

export default Home;
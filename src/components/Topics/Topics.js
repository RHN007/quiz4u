
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData()
    // console.log(topics.data);
    return (
        <div>
            <h1>This is for Topics {topics.data.length}</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
           {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic> )
            }
           </div>
        </div>
    );
};

export default Topics;
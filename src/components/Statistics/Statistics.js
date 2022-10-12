import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TopicContext } from '../Topics/Topics';



const Statistics = () => {
    const data = useContext(TopicContext)
    const data1 = [
        {
            name: 'React',
            quiz: 8,

        },
        {
            name: 'JavaScript',
            quiz: 9,

        },
        {
            name: 'CSS',
            quiz: 8
        },
        {
            name: 'Git',
            quiz: 11,
        },

    ];



    return (
        <div className='mt-10'>
        <ResponsiveContainer width={400}height={400}>
        <LineChart width={400} height={400} data={data1}>
                <Line type='monotone' dataKey="quiz" stroke='#82ca9d'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

            </LineChart>
        </ResponsiveContainer>
          

        </div>
    );
}


export default Statistics;
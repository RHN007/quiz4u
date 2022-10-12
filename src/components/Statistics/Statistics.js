

import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';




const Statistics = () => {
    const data2 = useLoaderData()
    // console.log(data2)
    return (
        <div className='mr-6 mt-10 flex justify-center'>
        <ResponsiveContainer width={400}height={400}>
        <LineChart width={300} height={300} data={data2.data}>
                <Line type='monotone' dataKey="total" stroke='#82ca9d'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

            </LineChart>
        </ResponsiveContainer>
          

        </div>
    );
}


export default Statistics;
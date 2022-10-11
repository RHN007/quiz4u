import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetails = () => {
    const details = useLoaderData()
    console.log(details.data)
    return (
        <div>
            <h1>This is  {details.data.length}</h1>
            {
                details.data.map(detail => <Question id={detail.id} question = {detail}></Question>)
            }
        </div>
    );
};

export default TopicDetails;
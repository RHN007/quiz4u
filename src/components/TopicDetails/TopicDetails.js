import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const TopicDetails = () => {
    const details = useLoaderData()
    console.log(details.data)
    const {id, name, questions} = details.data
    return (
        <div>
            <h1 className='text-center'>Questions of {name}</h1>
           <div>
           
            {questions.map((q, index)=> <Question key={q.id} index={index} qts={q}></Question>)}
         
        </div>

          

         
            
            
            
         


           </div>

          
        
    );
};

export default TopicDetails;
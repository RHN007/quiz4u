import React from 'react';

const Question = ({question}) => {
   const {name, logo, questions} = question; 
    return (
        <div>
            <h1>Name : {name}</h1>
        </div>
    );
};

export default Question;
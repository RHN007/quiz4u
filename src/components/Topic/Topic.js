import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicDetails from '../TopicDetails/TopicDetails';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic; 

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`quiz/${id}`)
    }
    return (
        <div >
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} width={300} alt="Topics" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
             <p>Total Question: {total}</p>
             <div className="card-actions justify-center">
             <button onClick={handleNavigate} className="btn btn-primary"><TopicDetails></TopicDetails></button>
             </div>
        </div>
</div>
        </div>
    );
};

export default Topic;
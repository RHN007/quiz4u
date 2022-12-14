
import { useNavigate } from 'react-router-dom';




const Topics = ({ topic }) => {
    
    const { id, name, logo, total } = topic;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`quiz/${id}`)
    }
    return (
        
      
            <div>
            <div className="card card-compact bg-base-300 shadow-xl">
                <figure className='p-5'><img src={logo} width={300} alt="Topics" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question: {total}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleNavigate} className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
            
        </div>
      
     
     );
    };
    
export default Topics;
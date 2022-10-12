import React, { useState } from 'react';
import {   EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = ({ qts, index }) => {
    const {  options, question,correctAnswer } = qts;
    const description = question; 
    const newDescription = description.replace('<p>', '').replace('</p>','');
    
    const [open, setOpen] = useState(false)
    // console.log(options[0].length)
    // console.log(correctAnswer)
    const notify = (e, value) => {
       
        if(e.target.value === correctAnswer){
            toast('Wow Your answer is correct')
            console.log('found')
        }   
        else {
            console.log('wrong answer')
            toast.error("Wrong Answer Try Again!", {
                position: toast.POSITION.TOP_LEFT
              });
        }        
    }
 
    
   
    return (
        <div>
            <div className="quiz  outline outline-offset-2  outline-green-700 rounded-lg  m-5 md:m-0 md:mt-5 p-5">
              <div className='  md:flex md:justify-between'>
              <h1 className=' mb-4 font-bold text-blue-500'>Quiz:{index + 1}  {newDescription}</h1>
                <div className='text-center'>
                   {
                    open ?  <span> <small className='font-bold text-lg text-green-600'>Answer:</small> {correctAnswer}</span>  : <EyeSlashIcon onClick={() => setOpen(!open)} className ='h-6 w-6 text-blue-500'/>
                   }
                  
                </div>
              </div>
                <div className='p-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                            <label >
                                <input name="radio" type="radio" onClick={notify} value={options[0]} />
                                
                                <span className='ml-2'>{options[0]}</span>
                                <ToastContainer/>
                                
                            </label>
                        </div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                             <label>
                            <input name="radio" type="radio"  onClick={notify} value={options[1]}/>
                            <span className='ml-2'>{options[1]}</span>
                            <ToastContainer/>
                        </label></div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                            <label>
                                <input name="radio" type="radio"  onClick={notify} value={options[2]} />
                                <span className='ml-2'>{options[2]}</span>
                                <ToastContainer/>
                            </label>
                        </div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                            <label>
                                <input name="radio" type="radio"  onClick={notify} value={options[3]} />
                                <span className='ml-2'>{options[3]}</span>
                                <ToastContainer/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
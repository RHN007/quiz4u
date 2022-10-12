import React, { useState } from 'react';
import {   EyeSlashIcon } from '@heroicons/react/24/solid'

const Question = ({ qts, index }) => {
    const {  options, question,correctAnswer } = qts;
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="quiz  outline outline-offset-2  outline-green-700 rounded-lg  m-5 md:m-0 md:mt-5 p-5">
              <div className='  md:flex md:justify-between'>
              <h1 className=' mb-4 font-bold text-blue-500'>Quiz:{index + 1}  {question}</h1>
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
                                <input name="radio" type="radio"  />
                                <span className='ml-2'>{options[0]}</span>
                            </label>
                        </div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                             <label>
                            <input name="radio" type="radio" />
                            <span className='ml-2'>{options[1]}</span>
                        </label></div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                            <label>
                                <input name="radio" type="radio"  />
                                <span className='ml-2'>{options[2]}</span>
                            </label>
                        </div>
                        <div className='border border-green-700 p-4 rounded-lg bg-slate-100'>
                            <label>
                                <input name="radio" type="radio"  />
                                <span className='ml-2'>{options[3]}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
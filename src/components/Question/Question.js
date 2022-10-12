import React, { useState } from 'react';
import {  EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const Question = ({ qts, index }) => {
    const {  options, question,correctAnswer } = qts;
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="quiz border border-2 border-green-700 rounded-lg   mt-5 p-5">
              <div className='flex justify-between'>
              <h1 className=' mb-4 font-bold text-blue-500'>Quiz:{index + 1}  {question}</h1>
                <div>
                   {
                    open ?  <span>{correctAnswer}</span>  : <EyeSlashIcon onClick={() => setOpen(!open)} className ='h-6 w-6 text-blue-500'/>
                   }
                  
                </div>
              </div>
                <div className='p-5'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label className="">
                                <input name="radio" type="radio"  />
                                <span className='ml-2'>{options[0]}</span>
                            </label>
                        </div>
                        <div> <label className="">
                            <input name="radio" type="radio" />
                            <span className='ml-2'>{options[1]}</span>
                        </label></div>
                        <div>
                            <label className="">
                                <input name="radio" type="radio"  />
                                <span className='ml-2'>{options[2]}</span>
                            </label>
                        </div>
                        <div>
                            <label className="">
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
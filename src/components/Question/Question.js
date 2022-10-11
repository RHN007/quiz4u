import React from 'react';

const Question = ({ qts, index }) => {
    const {  options, question } = qts;
    return (
        <div>
            <div className="quiz border rounded mt-5 p-5">
                <h1 className=' mb-4'>Quiz:{index + 1}  {question}</h1>
                <div className='p-5'>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label className="radio">
                                <input name="radio" type="radio"  />
                                <span>{options[0]}</span>
                            </label>
                        </div>
                        <div> <label className="radio">
                            <input name="radio" type="radio" />
                            <span>{options[1]}</span>
                        </label></div>
                        <div>
                            <label className="radio">
                                <input name="radio" type="radio"  />
                                <span>{options[2]}</span>
                            </label>
                        </div>
                        <div>
                            <label className="radio">
                                <input name="radio" type="radio"  />
                                <span>{options[3]}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewApplied from '../ReviewApplied/ReviewApplied';

const Applied = () => {
    const jobData = useLoaderData()
    console.log(jobData)
    return (
        <div>
            <div>
                <p className='py-24 text-center text-3xl font-bold bg-cyan-50 px-5'>Applied Job</p>
            </div>
            <div className='mt-16  mx-48'>
                <div className='ms-96'>
                    <div className='ms-96'>
                        <button className='bg-indigo-400 text-white ms-96'>Remote Job</button>
                        <button className='bg-indigo-400 text-white ms-14'>Onsite Job</button>
                    </div>
                </div>
                {
                    jobData.map(job => <ReviewApplied key={job.id} job={job}></ReviewApplied>)
                }
            </div>
        </div>
    );
};

export default Applied;
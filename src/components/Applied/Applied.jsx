import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const jobData = useLoaderData()
    return (
        <div>
            <div>
                <p className='py-24 text-center text-3xl font-bold bg-cyan-50 px-5'>Applied Job</p>
            </div>
            <div>
                <h2>Jobs : {jobData.length}</h2>
            </div>
        </div>
    );
};

export default Applied;
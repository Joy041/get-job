import React from 'react';

const DisplayFeaturedJobs = ({ feature, viewDetails }) => {
    const { img, name, company, address, salary, job_time, job_place, id } = feature;
    return (
        <div className='border-solid border-2 border-gray-100 rounded-xl ps-10 pt-10 pb-10'>
            <img className='w-28 h-20' src={img} alt="" />
            <p className='pt-8 pb-2 text-2xl font-semibold'>{name}</p>
            <p className='text-xl text-gray-500'>{company}</p>
            <button className='mt-4 mb-4 me-4 text-indigo-500 bg-white border-indigo-500'>{job_place}</button>
            <button className='text-indigo-500 bg-white border-indigo-500'>{job_time}</button>
            <div className='flex mb-6'>
                <p className='text-xl'>{address}</p>
                <p className='text-xl ms-6'>{salary}</p>
            </div>
            <button onClick={() => viewDetails(id)} className='bg-indigo-400 text-white hover:border-0'>View Details</button>
        </div>
    );
};

export default DisplayFeaturedJobs;
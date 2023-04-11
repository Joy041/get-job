import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const FeaturedJobs = ({ feature }) => {
    const { img, name, company, address, salary, job_time, job_place, id } = feature;

    return (
        <div className='mt-5 md:mt-0'>      
            <div className='border-solid border-2 border-gray-100 rounded-xl ps-10 pt-10 pb-10'>
                <img className='w-28 h-20' src={img} alt="" />
                <p className='pt-8 pb-2 text-2xl font-semibold'>{name}</p>
                <p className='text-xl text-gray-500'>{company}</p>
                <button className='mt-4 mb-4 me-4 text-indigo-500 bg-white border-indigo-500'>{job_place}</button>
                <button className='text-indigo-500 bg-white border-indigo-500'>{job_time}</button>
                <div className='flex mb-6'>
                    <p className='text-xl'><FontAwesomeIcon className='pe-2' icon={faLocationDot} />{address}</p>
                    <p className='text-xl ms-6'><FontAwesomeIcon className='pe-2' icon={faCircleDollarToSlot} />{salary}</p>
                </div>
                <div>
                   <Link to={`/details/${id}`}><button className='bg-indigo-400 text-white'> View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const ReviewApplied = ({ job }) => {
    const { img, name, company, address, salary, job_time, job_place, id } = job;
    return (
        <div className='mt-6'>
            <div className='border-solid border-2 border-gray-100 rounded-xl ps-10 pt-10 pb-10 flex items-center'>
                <img className='w-48 ms-8 bg-cyan-50 py-12 px-14' src={img} alt="" />
                <div className='ms-8'>
                    <p className='pt-8 pb-2 text-2xl font-semibold'>{name}</p>
                    <p className='text-xl text-gray-500'>{company}</p>
                    <button className='mt-4 mb-4 me-4 text-indigo-500 bg-white border-indigo-500'>{job_place}</button>
                    <button className='text-indigo-500 bg-white border-indigo-500'>{job_time}</button>
                    <div className='flex mb-6'>
                        <p className='text-xl'><FontAwesomeIcon className='pe-2' icon={faLocationDot} />{address}</p>
                        <p className='text-xl ms-6'><FontAwesomeIcon className='pe-2' icon={faCircleDollarToSlot} />{salary}</p>
                    </div>
                </div>
                <div className='ms-96'>
                    <Link to={`/details/${id}`}><button className='bg-indigo-400 text-white'> View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewApplied;
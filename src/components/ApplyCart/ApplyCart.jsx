import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faCalendarAlt, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const ApplyCart = ({ details }) => {
    console.log(details)
    const { salary, name, phone, email, address } = details;
    return (
        <div className='bg-cyan-50 mt-32 ms-6 p-8'> 
            <p className='text-xl font-semibold pb-5'>Job Details</p><hr />
            <p className='pt-5 pb-4'>
                <FontAwesomeIcon className='pe-2' icon={faCircleDollarToSlot} />
                <span className='text-base font-medium'>Salary</span> : <span className='text-base text-gray-500'>{salary}</span>
            </p>
             <p className='pb-8'>
             <FontAwesomeIcon className='pe-2' icon={faCalendarAlt} />
               <span className='text-base font-medium'>Job Title</span> : <span className='text-base text-gray-500'>{name}</span> 
             </p>
             <p className='text-xl font-semibold pb-5'>Contact Information</p><hr />
             <p className='pt-5 pb-4'>
             <FontAwesomeIcon className='pe-2' icon={faPhone} />
                <span className='text-base font-medium'>Phone</span> : <span className='text-base text-gray-500'>{phone}</span>
             </p>
             <p className='pb-4'>
             <FontAwesomeIcon className='pe-2' icon={faEnvelope} />
                <span className='text-base font-medium'>Email</span> : <span className='text-base text-gray-500'>{email}</span>
             </p>
             <p>
             <FontAwesomeIcon className='pe-2' icon={faLocationDot} />
                <span className='text-base font-medium'>Address</span> : <span className='text-base text-gray-500'>{address}</span>
             </p>
             <Link to = {'/applied'}><button className='bg-indigo-400 text-white mt-6 px-24'>Apply Now</button></Link>
        </div>
    );
};

export default ApplyCart;
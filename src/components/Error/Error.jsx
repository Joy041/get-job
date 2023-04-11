import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-28'>
            <p className='text-5xl font-bold pb-2'>OOPS!!!</p>
            <p className='font-semibold'>Error 404 : Page not found</p>
            <p className='font-semibold'>The page are looking for doesn't exist or an other error occurred</p>
            <Link to={'/'}>Go Home</Link>
        </div>
    );
};

export default Error;
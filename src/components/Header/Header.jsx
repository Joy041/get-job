import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around items-center pt-12 bg-cyan-50 px-5'>
            <h1 className='text-3xl font-bold'>GetJobs</h1>
            <div className='header-link'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button className='bg-indigo-400 text-white hover:border-0'>Start Applying</button>
        </div>
    );
};

export default Header;
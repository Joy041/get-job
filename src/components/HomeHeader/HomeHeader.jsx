import React from 'react';
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='flex-col-reverse md:flex-row flex md:justify-around md:items-center pt-14 ps-12 bg-cyan-50'>
            <div className='mt-12 md:mt-0'>
                <h1 className='text-7xl pb-6'>One Step <br /> Closer To Your <br /> Dream Job</h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='bg-indigo-400 mt-8 mb-6 md:mb-0'>Get Started</button>
            </div>
            <div>
                <img className='header-img' src={'https://static.wixstatic.com/media/397db0_b1e4cc7048394d3596336c6aced29dd3~mv2.png/v1/fill/w_206,h_206,q_50,usm_7.70_1.06_0.18/397db0_b1e4cc7048394d3596336c6aced29dd3~mv2.png'} alt="" />
            </div>
        </div>
    );
};

export default HomeHeader;
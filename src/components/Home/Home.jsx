import React, { useState } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [show, setShow] = useState(false)
    const featured = useLoaderData();

    
    return (
        <div>
            <HomeHeader></HomeHeader>
            <JobCategory></JobCategory>
            <div >
                <div className='text-center mt-32'>
                    <h2 className='text-5xl font-bold pb-4'>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-7 md:mx-52 mt-8'>
                    {
                        featured.slice(0, show ? 6 : 4).map(feature => <FeaturedJobs key={feature.id} feature={feature}></FeaturedJobs>)
                    }
                </div>
                <div className='text-center mt-10 mb-12'>
                    <button onClick={() => setShow(!show)} className='bg-indigo-400 text-white'>{show ? 'Short Job List' : 'See All Jobs'}</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
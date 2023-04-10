import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featured = useLoaderData();
    // console.log(featured)
    return (
        <div>
            <HomeHeader></HomeHeader>
            <JobCategory></JobCategory>
            <div >
                <div className='text-center mt-32'>
                    <h2 className='text-5xl font-bold pb-4'>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 gap-7 mx-52 mt-8'>
                    {
                        featured.map(feature => <FeaturedJobs key={feature.id} feature={feature}></FeaturedJobs>)
                    }
                </div>
                <div className='text-center mt-10 mb-12'>
                    <button className='bg-indigo-400 text-white'>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
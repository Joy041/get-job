import React, { useEffect, useState } from 'react';
import DisplayFeaturedJobs from '../DisplayFeaturedJobs/DisplayFeaturedJobs';
import Details from '../Details/Details';

const FeaturedJobs = () => {
    const [featured, setFeatured] = useState([])
    useEffect(() => {
        fetch(`featuredjob.json`)
            .then(res => res.json())
            .then(data => setFeatured(data.slice(0, 4)))
    }, [])

    const viewDetails = id => {
        console.log(id)
        {
            <Details id = {id}></Details>
        }
    }

    return (
        <div>
            <div className='text-center mt-32'>
                <h2 className='text-5xl font-bold pb-4'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-7 mx-52 mt-8'>
                {
                    featured.map(feature => <DisplayFeaturedJobs key={feature.id} feature={feature} viewDetails = {viewDetails}></DisplayFeaturedJobs>)
                }
            </div>
            <div className='text-center mt-10 mb-12'>
                <button className='bg-indigo-400 text-white'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
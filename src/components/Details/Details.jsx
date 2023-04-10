import React, { useContext, useEffect, useState } from 'react';
// import { IdContext } from '../FeaturedJobs/FeaturedJobs';
// import { getShoppingCart } from '../../utilities/FakeDb';
import { useParams, useLoaderData } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState({});
    const dynamic = useParams()
    const dynamicId = dynamic.detailsId;
    const id = parseInt(dynamicId)


    const data = useLoaderData()
    // setDetails(data)

    useEffect(() => {
        if (data) {
            const detailsData = data.find(dt => dt.id == id)
            setDetails(detailsData);
        }
    }, [])

    const { description, responsibility, education, experiences } = details;
    console.log(details)

    return (
        <div>
            <div>
                <p className='py-36 text-center text-3xl font-bold bg-cyan-50 px-5'>Job Details</p>
            </div>
            <div className='details-container'>
                <div className='mt-32'>
                    <p>Job Description :{description}</p>
                    <p>Job Responsibility : {responsibility}</p>
                    <p>Educational Requirements: : {education}</p>
                    <p>Experiences : {experiences}</p>
                </div>
                <div>
                    <h2>cart place</h2>
                </div>
            </div>
        </div>
    );
};

export default Details;
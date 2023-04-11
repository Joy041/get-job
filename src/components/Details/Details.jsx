import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import './Details.css'
import ApplyCart from '../ApplyCart/ApplyCart';
import { addToDb} from '../../utilities/FakeDb';

const Details = () => {
    const [details, setDetails] = useState({});
    const [apply, setApply] = useState([])


    const dynamic = useParams()
    const dynamicId = dynamic.detailsId;
    const id = parseInt(dynamicId)


    const data = useLoaderData()

    useEffect(() => {
        if (data) {
            const detailsData = data.find(dt => dt.id == id)
            setDetails(detailsData);
        }
    }, [])


    const { description, responsibility, education, experiences } = details;
    console.log(details)

    const addAppliedData = details => {
        console.log(details.id)
        let newApply = [];

        const exists = apply.find (ap => ap.id === details.id)
        if(!exists){
            details.quantity = 1;
            newApply = [...apply , exists]
        }

        else{
            exists.quantity = exists.quantity + 1;
            const remaining = apply.filter(ap => ap.id !== details.id)
            newApply = [...remaining, exists]
        }
        setApply(newApply)
        addToDb(details.id)
        console.log(newApply)

        
    }

    return (
        <div>
            <div>
                <p className='py-24 text-center text-3xl font-bold bg-cyan-50 px-5'>Job Details</p>
            </div>
            <div className='mx-48 details-container'>
                <div className='mt-32 text-base'>
                    <p className='pb-6'><span className='font-bold'>Job Description</span> : <span className='text-gray-500'>{description}</span></p>
                    <p className='pb-6'><span className='font-bold'>Job Responsibility</span> : <span className='text-gray-500'>{responsibility}</span></p>
                    <p className='pb-6'><span className='font-bold'>Educational Requirements</span> :  <br /> <br /><span className='text-gray-500'>{education}</span></p>
                    <p><span className='font-bold'>Experiences</span> : <br /><br /><span className='text-gray-500'>{experiences}</span></p>
                </div>
                <div>
                    {
                        <ApplyCart key={details.id} details = {details} addAppliedData = {addAppliedData}></ApplyCart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;
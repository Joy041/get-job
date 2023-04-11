import React, { useContext, useEffect, useState } from 'react';
// import { IdContext } from '../FeaturedJobs/FeaturedJobs';
// import { getShoppingCart } from '../../utilities/FakeDb';
import { useParams, useLoaderData } from 'react-router-dom';
import './Details.css'
import ApplyCart from '../ApplyCart/ApplyCart';
import { addToDb, getShoppingCart } from '../../utilities/FakeDb';

const Details = () => {
    const [details, setDetails] = useState({});
    const [apply, setApply] = useState([])


    const dynamic = useParams()
    const dynamicId = dynamic.detailsId;
    const id = parseInt(dynamicId)


    const data = useLoaderData()
    // console.log(data)
    // setDetails(data)

    useEffect(() => {
        if (data) {
            const detailsData = data.find(dt => dt.id == id)
            setDetails(detailsData);
        }
    }, [])

    useEffect(()=> {
        const storeApplyData = getShoppingCart();
        console.log(storeApplyData)
        const saveApply = [];

        for (const id in storeApplyData){
            const addedApply = data.find( dt => dt.id === id)
            if(addedApply){
                const quantity = storeApplyData[id];
                addedApply.quantity = quantity;
                saveApply.push(addedApply);
            }
        }
        setApply(saveApply)
    },[data])

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
                        <ApplyCart key={details.id} details = {details} data = {data} addAppliedData = {addAppliedData}></ApplyCart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;
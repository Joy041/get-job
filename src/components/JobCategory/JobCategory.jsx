import React, { useEffect, useState } from 'react';
import DisplayJobCategory from '../DisplayJobCategory/DisplayJobCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`category.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)
    return (
        <div>
            <div className='text-center mt-32'>
                <h2 className='text-5xl font-bold pb-4'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:flex md:justify-evenly mb-14 mt-10'>
                {
                    categories.map(category => <DisplayJobCategory key={category.id} category={category}></DisplayJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;
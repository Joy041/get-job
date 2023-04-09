import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    // const [category, setCategory] = useState([])
    // useEffect(() => 
    //   fetch(`category.json`)
    //   .then(res => res.json())
    //   .then(data => setCategory(data))
    // , [])
    return (
        <div>
            <div className='text-center mt-32'>
                <h2 className='text-5xl font-bold pb-4'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default JobCategory;
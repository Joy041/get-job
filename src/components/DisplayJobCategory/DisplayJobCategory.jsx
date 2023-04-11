import React from 'react';

const DisplayJobCategory = ({category}) => {
    const { id, name, title, img } = category;
    return (
        <div >
            <div className='bg-cyan-50 p-8 rounded-lg ps-10'>
                <img className='w-14 bg-indigo-50 mb-8 rounded' src={img} alt="" />
                <p className='pb-2'>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default DisplayJobCategory;
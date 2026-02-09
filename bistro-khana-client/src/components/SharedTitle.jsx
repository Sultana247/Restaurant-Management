import React from 'react';

const SharedTitle = ({headline, subheadline}) => {
    return (
        <div className='text-center w-4/12 mx-auto mt-20 mb-12'>
            <h4 className='subheadline inter-font italic text-xl'> ---{subheadline}---</h4>
            <div className=' dark-6 my-5 border-y-4'>
                <h1 className='inter-font my-4 text-black text-4xl uppercase'>{headline}</h1>
            </div>
        </div>
    );
};

export default SharedTitle;
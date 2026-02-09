import React from 'react';
import chef from '../../../assets/home/chef-service.jpg'
const Description = () => {
    return (
        <div style={{backgroundImage: `url(${chef})`}} className='bg-center bg-cover h-150 py-28 px-35'>
            <div className='bg-white py-24 mx-auto text-center px-30'>
                <h2 className='uppercase text-5xl'>bistro boss</h2>
                <p className='inter-font text-[16px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Description;
import React from 'react';

const PopularMenu = ({item}) => {
    const {image, name, recipe, price}=item;
    return (
        <div className='flex gap-3'>
            <img src={image} alt="" className='w-30 h-27 rounded-b-[200px] rounded-r-[200px] ' />
            <div>
                <h3 className='text-xl mb-2'>{name}-----------</h3>
                <p className='text-[16px] inter-font dark-3'>{recipe}</p>
            </div>
            <p className='subheadline inter-font text-xl'>${price}</p>
        </div>
    );
};

export default PopularMenu;
import React from 'react';

const MenuCategory = ({item}) => {
    const { image, name, recipe } = item
    return (
        <div className="bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Chef recommends food items" 
                    className='w-full'/>
            </figure>
            <div className="card-body text-center dark7-bg w-full lg:h-60 ">
                <div className='flex justify-center flex-col'>
                    <h2 className=" inter-font font-semibold text-2xl">{name}</h2>
                    <p className='inter-font text-[16px] mt-2'>{recipe}</p>
                    <div className=" ">
                        <button className="cart-color btn btn-neutral border-0 btn-outline border-b-4 rounded-lg py-5 px-6 mt-6 border-b-[#BB8506] inter-font font-medium text-xl uppercase">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
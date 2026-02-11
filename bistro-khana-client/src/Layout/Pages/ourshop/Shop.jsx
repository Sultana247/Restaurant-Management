import React from 'react';
import Cover from '../../../components/Cover';
import shopBanner from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet';
const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover img={shopBanner} title={"Our shop"} desc={"WOULD YOU LIKE TO TRY SOME DISH?"}></Cover>
            <div className='max-w-7xl mx-auto'>

            </div>
        </div>
    );
};

export default Shop;
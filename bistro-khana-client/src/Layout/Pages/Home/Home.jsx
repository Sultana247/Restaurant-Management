import React from 'react';
import Banner from './Banner';
import SharedTitle from '../../../components/SharedTitle';
import MenuSwiper from './MenuSwiper';
import Description from './Description';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SharedTitle headline={"From 11:00am to 10:00pm"} subheadline={"order online"}></SharedTitle>
            <div className='max-w-7xl mx-auto mb-24'>
                <MenuSwiper></MenuSwiper>
            </div>
            <div className='max-w-7xl mx-auto mb-24'>
                <Description></Description>
            </div>
            <SharedTitle headline={"Check it out"} subheadline={"from our menu"} ></SharedTitle>
        </div>
    );
};

export default Home;
import React from 'react';
import Cover from '../../../components/Cover';
import menuBanner from '../../../assets/menu/banner3.jpg'
import SharedTitle from '../../../components/SharedTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItems from '../../../components/MenuItems';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
const Menu = () => {
    const [menu]=useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* today's offer */}
            <Cover img={menuBanner} title={"Our menu"} desc={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
            <SharedTitle headline={"today's offer"} subheadline={"Don't miss"}></SharedTitle>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 mb-8'>
                {offered.map(item=><MenuItems item={item} key={item._id}></MenuItems>)}
            </div>
            <div className='flex justify-center'>
                <Link to={`/ourshop/salad`}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>order your favourite food</button></Link>
            </div>
            {/* desert section */}
            <Cover img={dessertImg} title={"desserts"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 mt-24'>
                {dessert.map(item=><MenuItems item={item} key={item._id}></MenuItems>)}
            </div>
            <div className='flex justify-center'>
                <Link to={`/ourshop/dessert`}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>order your favourite food</button></Link>
            </div>

            {/* pizza section */}
            <Cover img={pizzaImg} title={"pizza"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 mt-24'>
                {pizza.map(item=><MenuItems item={item} key={item._id}></MenuItems>)}
            </div>
            <div className='flex justify-center'>
                <Link to={`/ourshop/pizza`}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>order your favourite food</button></Link>
            </div>

            {/* salad section */}
            <Cover img={saladImg} title={"Salads"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 mt-24'>
                {salad.map(item=><MenuItems item={item} key={item._id}></MenuItems>)}
            </div>
            <div className='flex justify-center'>
                <Link to={`/ourshop/salad`}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>order your favourite food</button></Link>
            </div>

            {/* soup section */}
            <Cover img={soupImg} title={"soups"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <div className='max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 mb-8 mt-24'>
                {soup.map(item=><MenuItems item={item} key={item._id}></MenuItems>)}
            </div>
            <div className='flex justify-center'>
                <Link to={`/ourshop/soup`}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>order your favourite food</button></Link>
            </div>

            
        </div>
    );
};

export default Menu;
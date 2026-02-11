import Cover from '../../../components/Cover';
import shopBanner from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from './MenuCategory';
import { useState } from 'react';
import { useParams } from 'react-router';
const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const category = useParams();
    const categorySelected=category.category
    const initialIndex = categories.indexOf(categorySelected)
    console.log(initialIndex)
    const {menu}= useMenu();
    const [tabIndex, setTabIndex]=useState(initialIndex)
    const drinks = menu.filter(item => item.category === 'drinks');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover img={shopBanner} title={"Our shop"} desc={"WOULD YOU LIKE TO TRY SOME DISH?"}></Cover>
            <div className='max-w-7xl mx-auto mt-15 inter-font text-2xl'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <div className='max-w-xl mx-auto '>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUP</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </div>
                    </TabList>
                        
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 mb-16'>
                            {salad.map(item=><MenuCategory item={item} key={item._id}></MenuCategory>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 mb-16'>
                            {pizza.map(item=><MenuCategory item={item} key={item._id}></MenuCategory>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 mb-16'>
                            {soup.map(item=><MenuCategory item={item} key={item._id}></MenuCategory>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 mb-16'>
                            {dessert.map(item=><MenuCategory item={item} key={item._id}></MenuCategory>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 mb-16'>
                            {drinks.map(item=><MenuCategory item={item} key={item._id}></MenuCategory>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;
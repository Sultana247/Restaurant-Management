import Banner from './Banner';
import SharedTitle from '../../../components/SharedTitle';
import MenuSwiper from './MenuSwiper';
import Description from './Description';
import PopularMenu from './PopularMenu';
import useMenu from '../../../hooks/useMenu';
import ChefRecommends from './ChefRecommends';
import featureimg from '../../../assets/home/featured.jpg'
import useReview from '../../../hooks/useReview';
import Testimonials from './Testimonials';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import {Helmet} from "react-helmet";
const Home = () => {
    const [ menu ] = useMenu();
    const { reviews } = useReview();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <div className='mx-auto'>
                <Banner></Banner>
            </div>
            <SharedTitle headline={"From 11:00am to 10:00pm"} subheadline={"Order online"}></SharedTitle>
            <div className='max-w-7xl mx-auto mb-24'>
                <MenuSwiper></MenuSwiper>
            </div>
            <div className='max-w-7xl mx-auto mb-24'>
                <Description></Description>
            </div>
            <SharedTitle headline={"from our menu"} subheadline={"Check it out"} ></SharedTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12'>
                {popular.map(item => <PopularMenu item={item} key={item._id}></PopularMenu>)}
            </div>
            <div className='flex justify-center'>
                <Link to={"/ourmenu"}><button className='rounded-xl py-5 px-2 btn btn-neutral border-0 btn-outline border-b-black  border-b-4 mb-28 text-xl font-medium inter-font uppercase'>view full menu</button></Link>
            </div>
            <div className='max-w-7xl mx-auto mb-24 dark1-bg py-24'>
                <p className='raleway-font text-[50px] text-white text-center'>Call Us: +88 0192345678910</p>
            </div>
            <SharedTitle headline={"chef recommends"} subheadline={"Should Try"}></SharedTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-24'>
                {menu.slice(0, 3).map(item => <ChefRecommends item={item} key={item._id}></ChefRecommends>)}
            </div>
            {/* parallex part featured part */}
            <div
                className="hero h-[700px] bg-fixed "
                style={{
                    backgroundImage:
                        `url(${featureimg})`,
                }}
            >
                <div className="hero-overlay "></div>
                <div className="hero-content text-neutral-content text-center  ">
                    <div className="">
                        {/* title part */}
                        <div className='text-center w-4/12 mx-auto  mb-12'>
                            <h4 className='subheadline inter-font italic text-xl'> ---Check it out---</h4>
                            <div className=' dark-6 my-5 border-y-4'>
                                <h1 className='inter-font my-4  text-4xl uppercase text-white'>from our menu</h1>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-center'>
                            <img src={featureimg} alt="" className='w-[550px] h-[350px]' />
                            <div className='text-left'>
                                <h1 className="mb-2 text-2xl inter-font">March 20, 2023</h1>
                                <h1 className="mb-2 text-2xl inter-font">WHERE CAN I GET SOME?</h1>
                                <p className="mb-5 text-xl inter-font">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                                </p>
                                <button className=" btn btn-neutral btn-outline border-0 border-b-4 rounded-lg py-5 px-6 mt-6 border-b-white text-white inter-font font-medium text-xl uppercase">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimoniala */}
            <SharedTitle headline={"testimonials"} subheadline={"What Our Clients Say"}></SharedTitle>
            
            <div className='max-w-7xl mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    
                       {reviews.map(review => <SwiperSlide>
                            <Testimonials review={review} key={review._id}></Testimonials>
                       </SwiperSlide>)} 
                </Swiper>
                
            </div>
        </div>
    );
};

export default Home;
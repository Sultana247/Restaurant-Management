import React from 'react';
import { useForm } from "react-hook-form"
import { FaPaperPlane, FaUtensils } from 'react-icons/fa';
import SharedTitle from '../../../../components/SharedTitle';
import axios from 'axios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItems = () => {
    const formData = new FormData();
    const imagebbApiKey = import.meta.env.VITE_imagebb_api_key;
    const imagebburl = `https://api.imgbb.com/1/upload?key=${imagebbApiKey}`;
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        
        const image = data.image[0];
        formData.append('image', image)
        axios.post(imagebburl, formData)
            .then(res => {
                const imgUrl = res.data.data.display_url;
                const recipeData = {
                    name: data.name,
                    image: imgUrl,
                    recipe: data.recipe,
                    category: data.category,
                    price: parseFloat(data.price)
                }
                if (res.data.success) {
                     axiosSecure.post('/menu', recipeData)
                     .then(upload=>{
                    if (upload.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${data.name} has been added successfully!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                     })
                    
                }
            })


    }
    return (
        <div className='bg-white p-15 inter-font'>
            <div className='pb-10'>
                <SharedTitle headline={'add an item'} subheadline={"What's new?"} ></SharedTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='dark7-bg p-20'>
                <div className='flex gap-6'>
                    <div className='w-full'>
                        <label>Recipe Name*</label>
                        <input {...register("name", { required: true, maxLength: 20 })} type="text" name='name' placeholder='Enter your recipe name' className='w-full input mt-4 p-6' />
                    </div>

                </div>
                <div className='flex gap-6  mt-6'>
                    <div className='w-1/2'>
                        <label>Category*</label>
                        <select defaultValue="Pick a browser" {...register("category")} className="select mt-4 px-6 h-12 w-full">
                            <option disabled={true}>Select an option</option>
                            <option value={'salad'}>Salad</option>
                            <option value={'desert'}>Desert</option>
                            <option value={'soup'}>Soup</option>
                            <option value={'pizza'}>Pizza</option>
                            <option value={'drinks'}>Drinks</option>
                        </select>

                    </div>
                    <div className='w-1/2'>
                        <label>Price*</label>
                        <input {...register("price", { required: true })} type="text" name='price' placeholder='Enter your recipe price' className='w-full input mt-4 p-6' />
                    </div>

                </div>

                <div className='w-full mt-6'>
                    <label>Recipe Details*</label>
                    <textarea {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-xl w-full input mt-4 p-6 text-lg h-75"></textarea>
                </div>

                <div className=' flex flex-col gap-6 mt-10'>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost" />
                    <div className='flex justify-center gap-2 px-5 py-3 items-center text-white w-2/12 bg-linear-to-l from-[#B58130] to-[#835D23] '>
                        <input type="submit" value={"Add item"} className=' ' />
                        <FaUtensils />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default AddItems;
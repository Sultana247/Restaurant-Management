import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import SharedTitle from '../../../../components/SharedTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxios from '../../../../hooks/useAxios';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const axiosurl = useAxios();
    const axiosSecure = useAxiosSecure();
    const imagebbApiKey = import.meta.env.VITE_imagebb_api_key;
    const imagebburl = `https://api.imgbb.com/1/upload?key=${imagebbApiKey}`;
    const formdata = new FormData();
    const item = useLoaderData();
    const { name, price, recipe, category, _id } = item;
    const onSubmit = (data) => {
        console.log(data);
        const image = data.image[0];
        formdata.append('image', image)
        axiosurl.post(imagebburl, formdata)
            .then(res => {
                const imgUrl = res.data.data.display_url;
                const updateData = {
                    name: data.name,
                    recipe: data.recipe,
                    category: data.category,
                    image: imgUrl,
                    price: data.price
                }
                axiosSecure.patch(`/menu/${_id}`, updateData)
                    .then(result => {
                        if (result.data.modifiedCount > 0) {
                            
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${data.name} has been updated successfully!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })

    }
    console.log(item)
    return (
        <div className='bg-white p-15 inter-font'>
            <div className='pb-10'>
                <h1 className='inter-font my-4 text-black text-4xl uppercase text-center'>Update item</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='dark7-bg p-20'>
                <div className='flex gap-6'>
                    <div className='w-full'>
                        <label>Recipe Name*</label>
                        <input defaultValue={name} {...register("name", { required: true, maxLength: 20 })} type="text" name='name' placeholder='Enter your recipe name' className='w-full input mt-4 p-6' />
                    </div>

                </div>
                <div className='flex gap-6  mt-6'>
                    <div className='w-1/2'>
                        <label>Category*</label>
                        <select defaultValue={category} {...register("category")} className="select mt-4 px-6 h-12 w-full">
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
                        <input defaultValue={price} {...register("price", { required: true })} type="text" name='price' placeholder='Enter your recipe price' className='w-full input mt-4 p-6' />
                    </div>

                </div>

                <div className='w-full mt-6'>
                    <label>Recipe Details*</label>
                    <textarea defaultValue={recipe} {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-xl w-full input mt-4 p-6 text-lg h-75"></textarea>
                </div>
                <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost mt-5" />
                <div className=' flex flex-col justify-center items-center gap-6 mt-10'>

                    <div className='flex justify-center gap-2 px-5 py-3 items-center text-white  bg-linear-to-l from-[#B58130] to-[#835D23] '>
                        <input type="submit" value={"Update Recipe Detail"} className='btn-ghost ' />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default UpdateItem;
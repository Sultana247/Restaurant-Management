import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import AuthContext from '../../../Provider/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import useCart from '../../../hooks/useCart';
const MenuCategory = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { image, name, recipe, _id, price } = item;
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    
    const handleAddToCart = id => {
        if (user) {
            const cart = {
                menuId: id,
                name,
                image,
                email: user.email,
                price: price
            }
            axiosSecure.post('/carts', {
                cart
            })
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully added to cart!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "To add to cart you need to login first?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                    
                    navigate('/login',{state: {from: location.pathname}})
                }
            });
        }

    }
    return (
        <div className="bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Chef recommends food items"
                    className='w-full' />
            </figure>
            <div className="card-body text-center dark7-bg w-full lg:h-60 ">
                <div className='flex justify-center flex-col'>
                    <h2 className=" inter-font font-semibold text-2xl">{name}</h2>
                    <p className='inter-font text-[16px] mt-2'>{recipe}</p>
                    <div className=" ">
                        <button onClick={() => { handleAddToCart(_id) }} className="cart-color btn btn-neutral border-0 btn-outline border-b-4 rounded-lg py-5 px-6 mt-6 border-b-[#BB8506] inter-font font-medium text-xl uppercase">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
import React from 'react';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../../../../../hooks/useCart';
const CartItem = (cart) => {
    const axiosSecure = useAxiosSecure()
    const { item } = cart;
    const { image, name, price, _id } = item;
    const { index } = cart;
    const [, refetch]=useCart();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                refetch()
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                      
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}
            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => { handleDelete(_id) }} className="btn btn-ghost btn-xs"><MdDelete className='text-red-800 text-3xl'></MdDelete></button>
            </th>
        </tr>
    );
};

export default CartItem;
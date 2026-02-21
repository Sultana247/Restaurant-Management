import React from 'react';
import SharedTitle from '../../../../components/SharedTitle';
import useMenu from '../../../../hooks/useMenu';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ManageItem = () => {
    const [menu, loadingMenu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    if (loadingMenu) {
        return <div className='flex justify-center items-center m-25'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    const handleDelete = (id, item) => {
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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
       
    }
    return (
        <div>
            <SharedTitle headline={'manage all items'} subheadline={'Hurry Up??'}></SharedTitle>
            <div className='bg-white p-25 '>
                <div className='font-bold text-3xl flex justify-between mb-5'>
                    <h3>Total Items: {menu.length}</h3>


                </div>
                <table className="table ">

                    {/* head */}
                    <thead className='dashboard-bg text-white '>
                        <tr >
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='font-bold text-xl'>Item Image</th>
                            <th className='font-bold text-xl'>Item Name</th>
                            <th className='font-bold text-xl'>Price</th>
                            <th className='font-bold text-xl'>Action</th>
                            <th className='font-bold text-xl'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) =>
                            <tr className='inter-font' key={item._id}>
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
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>


                                    <Link to={`/dashboard/updateitem/${item._id}`}>
                                        <button className="btn dashboard-bg  p-2 text-white rounded-lg"><FaEdit className='text-xl'></FaEdit></button>
                                    </Link>


                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(item._id, item) }} className="btn bg-red-800  p-2 text-white rounded-lg"><MdDelete className=' text-xl'></MdDelete></button>
                                </th>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;
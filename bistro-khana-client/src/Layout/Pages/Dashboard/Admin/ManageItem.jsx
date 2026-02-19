import React from 'react';
import SharedTitle from '../../../../components/SharedTitle';
import useMenu from '../../../../hooks/useMenu';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ManageItem = () => {
    const { menu } = useMenu();
    console.log(menu)
    return (
        <div>
            <SharedTitle headline={'manage all items'} subheadline={'Hurry Up??'}></SharedTitle>
            <div className='bg-white p-25 '>
                <div className='font-bold text-3xl flex justify-between mb-5'>
                    <h3>Total Users: </h3>


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


                                    <button onClick={() => { handleRole(item._id) }} className="btn dashboard-bg  p-2 text-white rounded-lg"><FaEdit className='text-xl'></FaEdit></button>


                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(item._id) }}  className="btn bg-red-800  p-2 text-white rounded-lg"><MdDelete className=' text-xl'></MdDelete></button>
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
import React from 'react';
import SharedTitle from '../../../../components/SharedTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaUser, FaUsers } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import AuthContext from '../../../../Provider/AuthContext';
import useAdmin from '../../../../hooks/useAdmin';

const Allusers = () => {
    const [isAdmin] = useAdmin();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    });
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
                refetch();
                axiosSecure.delete(`/users/${id}`)
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

    const handleRole = (id, name) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${name} is an Admin now!`,
                        showClass: {
                            popup: `
                                                   animate__animated
                                                   animate__fadeInUp
                                                   animate__faster
                                                   `
                        },
                        hideClass: {
                            popup: `
                                                   animate__animated
                                                   animate__fadeOutDown
                                                   animate__faster
                                                   `
                        }
                    });
                    refetch();
                }
            })
    }

    return (
        <div>
            <SharedTitle headline={'manage users'} subheadline={'How many??'}></SharedTitle>
            <div className='bg-white p-25 '>
                <div className='font-bold text-3xl flex justify-between mb-5'>
                    <h3>Total Users: {users.length}</h3>


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
                            <th className='font-bold text-xl'>Name</th>
                            <th className='font-bold text-xl'>Email</th>
                            <th className='font-bold text-xl'>Role</th>
                            <th className='font-bold text-xl'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr className='inter-font' key={user._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role ? 'Admin'
                                    :
                                    <button onClick={() => { handleRole(user._id, user.name) }} className="btn dashboard-bg  p-2 text-white rounded-lg"><FaUsers className='text-3xl'></FaUsers></button>
                                    }

                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(user._id) }} className="btn"><MdDelete className='text-red-800 text-3xl'></MdDelete></button>
                                </th>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allusers;
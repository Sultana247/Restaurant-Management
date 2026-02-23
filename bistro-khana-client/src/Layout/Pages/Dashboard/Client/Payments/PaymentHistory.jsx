import React, { useContext, useEffect, useState } from 'react';
import SharedTitle from '../../../../../components/SharedTitle';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import AuthContext from '../../../../../Provider/AuthContext';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([])
    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
            .then(res => {
                setPayments(res.data)
            })
    }, [])
    return (

        <div>
            <SharedTitle headline={'Payment History'} subheadline={'At a Glance'}></SharedTitle>
            <div className='bg-white p-25 '>
                <div className='font-bold text-3xl flex justify-between mb-5'>
                    <h3>Total Payments: {payments.length}</h3>


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
                            <th className='font-bold text-xl'>Email</th>
                            <th className='font-bold text-xl'>Category</th>
                            <th className='font-bold text-xl'>Total Price</th>
                            <th className='font-bold text-xl'>Payment Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) =>
                            <tr className='inter-font' key={user._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    {payment.email}
                                </td>
                                <td>
                                    {payment.category || 'Food Order'}
                                </td>
                                <td>
                                    ${payment.price}
                                </td>
                                <td>
                                    {payment.date}
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
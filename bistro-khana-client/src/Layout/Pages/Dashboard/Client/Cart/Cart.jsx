import React from 'react';

import SharedTitle from '../../../../../components/SharedTitle';
import useCart from '../../../../../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
    const [cart]=useCart();
    const price = cart.map(item=>item.price)
    console.log(price)
    const totalprice = price?.reduce((accumulator, currentvalue)=> accumulator + currentvalue, 0)
    console.log(totalprice)

    return (
        <div className="overflow-x-auto p-5  ">
            <SharedTitle headline={'wanna add more'} subheadline={'My Cart'}></SharedTitle>
            <div className='bg-white p-25 '>
                <div className='font-bold text-3xl flex justify-between mb-5'>
                    <h3>Total Orders: {cart.length}</h3>
                <h3>Total Price: ${totalprice}</h3>
                <button className='dashboard-bg px-5 py-2 rounded-lg text-xl text-white'>Pay</button>
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
                        <th className='font-bold text-xl'>Foods</th>
                        <th className='font-bold text-xl'>Name</th>
                        <th className='font-bold text-xl'>Price</th>
                        <th className='font-bold text-xl'>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                 {cart.map((item, index)=><CartItem item={item} key={item._id} index={index}></CartItem>)}
              
                </tbody>
                
            </table>
            </div>
        </div>
    );
};

export default Cart;
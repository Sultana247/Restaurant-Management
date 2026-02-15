import React from 'react';
import useCart from '../../../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
    const [cart]=useCart();

    return (
        <div className="overflow-x-auto md:pt-20 md:pb-20 lg:pt-50 lg:pb-50 p-5">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th className='font-bold text-xl'>Foods</th>
                        <th className='font-bold text-xl'>Name</th>
                        <th className='font-bold text-xl'>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                 {cart.map((item, index)=><CartItem item={item} key={item._id} index={index}></CartItem>)}
              
                </tbody>
                
            </table>
        </div>
    );
};

export default Cart;
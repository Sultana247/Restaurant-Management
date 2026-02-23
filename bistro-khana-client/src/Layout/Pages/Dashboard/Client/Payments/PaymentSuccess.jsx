import React from 'react';
import successimage from '../../../../../assets/icon/correct.png'
const PaymentSuccess = () => {
    return (
        <div className='bg-white min-h-screen py-20'>
            
            <h2 className='text-green-500 text-7xl text-center'>Successfull Payment</h2>
            <div className='flex justify-center items-center'>
                <img className='mx-auto' src={successimage} alt="" />
            </div>
        </div>
    );
};

export default PaymentSuccess;
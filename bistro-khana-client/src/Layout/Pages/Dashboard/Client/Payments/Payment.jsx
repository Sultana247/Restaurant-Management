import React from 'react';
import MakePayment from './MakePayment';

const Payment = () => {
    return (
        <div className='pt-30 flex justify-center items-center flex-col  min-h-screen'>
            <div className='pb-5'>
                <h1 className='inter-font my-4 text-black text-4xl uppercase text-center'>Payment</h1>
            </div>
           
            <MakePayment></MakePayment>
           
        </div>
    );
};

export default Payment;
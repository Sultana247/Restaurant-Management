import React from 'react';
import MakePayment from './MakePayment';

const Payment = () => {
    return (
        <div className=' pt-50 flex justify-center  min-h-screen'>
            <div className='pb-10'>
                <h1 className='inter-font my-4 text-black text-4xl uppercase text-center'>Payment</h1>
            </div>
           <div className='pt-20'>
            <MakePayment></MakePayment>
           </div>
        </div>
    );
};

export default Payment;
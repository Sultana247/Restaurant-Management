import React, { useState, useEffect } from 'react';
import {Elements, EmbeddedCheckoutProvider, PaymentElement, useStripe} from '@stripe/react-stripe-js';
import { CheckoutProvider } from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../../../../hooks/CheckoutForm';
import useCart from '../../../../hooks/useCart';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
const MakePayment = () => {
    const [cart]= useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item)=>total + item.price, 0);
    const totalItems= cart.length;
    

    const [clientSecret, setClientSecret]=useState('');
    useEffect(()=>{
        const payment ={price: totalPrice, quantity: totalItems}
        axiosSecure.post('/create-payment-intent', payment)
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
   },[totalItems, totalPrice, axiosSecure]);

   const appearence ={
    theme: 'stripe'
   }
   const loader = 'auto'
// //    checkout form part
//      const stripe = useStripe();
    
//     const [message, setMessage] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!stripe ) {
//             // stipe and elements not loaded yet
//             return;

//         }
//         setIsLoading(true);
//         const { error } = await stripe.confirmPayment({
            
//             confirmParams: {
//                 return_url: `${window.location.origin}/dashboard/carts`
//             }
//         });
//         if (error.type === "card_error" || error.type === "validation_error") {
//             setMessage(error.message);
//         } else {
//             setMessage("An unexpected error occurred.");
//         }

//         setIsLoading(false);
//     };
//     const paymentOptions = {
//         layout: 'accordion',
//     }
    return (
        <div>
            {
                clientSecret && (
                    <Elements options={{clientSecret, appearence, loader}} stripe={stripePromise}>
                     
            <PaymentElement options={{layout: 'accordion'}} >
                           
            </PaymentElement>
            <button className='btn btn-primary' >
                   Pay now
                </button>
                
       
                            
                        
         </Elements>
                )
            }
        </div>
    );
};

export default MakePayment;
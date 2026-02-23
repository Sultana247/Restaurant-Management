import React, { useContext, useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import useCart from './useCart';
import AuthContext from '../Provider/AuthContext';
import useAxiosSecure from './useAxiosSecure';
const CheckoutForm = () => {
    const stripe = useStripe();
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState(null);
    const axiosSecure = useAxiosSecure();
    const elements = useElements();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        stripe.confirmPayment({
            elements,
            
            confirmParams: {

                // Make sure to change this to your payment completion page
                return_url: "http://localhost:5173/dashboard/paymentcomplete",
            },
            redirect: 'if_required',
            payment_method:{
                billing_details:{
                    name: user?.displayName || "Anonymous User", 
                    email: user?.email || "Unknown Email",
                }
            }


        })
            .then(async(result) => {
                
                if (result.error) {
                    if (result.error.type === "card_error" || result.error.type === "validation_error") {
                        setMessage(result.error.message);
                    } else {
                        setMessage("An unexpected error occurred.");
                    }
                }
                else{
                    if(result.paymentIntent.status === 'succeeded'){
                        setTransactionId(result.paymentIntent.id);
                        const paymentInfo ={
                            email: user?.email,
                            transactionId: transactionId,
                            price: totalPrice,
                            date: new Date(),
                            cartIds: cart.map(item=>item._id),
                            menuIds: cart.map(item=>item.menuId),
                            category: 'Food Order'
                        }
                       await axiosSecure.post('/payments', paymentInfo)
                        .then(res=>{
                            refetch();
                            if(res.data.result.insertedId){
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Payment successful',
                                    timer: 1500,
                                    showConfirmButton: false,
                                })
                            }
                        })
                    }
                }
            })




        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.

        // confirm payment success

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }
    return (
        <form id="payment-form" onSubmit={handleSubmit}>

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit" className='btn btn-primary mt-5 w-full'>
                <span id="button-text ">
                    {isLoading ? <div className="spinner" id="spinner"></div> : `Pay now $ ${totalPrice}`}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
           
        </form>
    );
};

export default CheckoutForm;
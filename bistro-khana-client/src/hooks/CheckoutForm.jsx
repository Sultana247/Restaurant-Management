import React, { useState } from 'react';
import {  PaymentElement } from '@stripe/react-stripe-js/checkout';
import {  useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
const CheckoutForm = () => {
    const stripe = useStripe();
    
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe ) {
            // stipe and elements not loaded yet
            return;

        }
        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
            
            confirmParams: {
                return_url: `${window.location.origin}/dashboard/carts`
            }
        });
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };
    const paymentOptions = {
        layout: 'accordion',
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement options={paymentOptions}>
                           
            </PaymentElement>
            <button className='btn btn-primary' >
                   Pay now
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>} 
        </form>
    );
};

export default CheckoutForm;
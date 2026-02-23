import React, { useState, useEffect, useContext } from 'react';
import { Elements, EmbeddedCheckoutProvider, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../../../../hooks/CheckoutForm';
import useCart from '../../../../../hooks/useCart';
import AuthContext from '../../../../../Provider/AuthContext';
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
const MakePayment = () => {
    const [clientSecret, setClientSecret] = useState("");
    
    const {user}=useContext(AuthContext);
   
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
       if(totalPrice > 0){
         fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: parseFloat(totalPrice), customer: user?.email }),
        })
            .then((res) => res.json())
            .then((data) => {
              
                setClientSecret(data.clientSecret);
               
                
            });
       }
    }, [totalPrice, user?.email]);
    const appearance = {
        theme: 'stripe',
    };
    // Enable the skeleton loader UI for optimal loading.
    const loader = 'auto';
    return (
        <div>
            {clientSecret && (
                <Elements options={{ clientSecret, appearance, loader }}  stripe={stripePromise} key={clientSecret}>
                    <CheckoutForm />
                </Elements>
            )}

        </div>
    );
};

export default MakePayment;
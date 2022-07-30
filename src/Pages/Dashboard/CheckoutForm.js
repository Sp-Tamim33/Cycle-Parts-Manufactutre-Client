import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')
        if (paymentMethod) {
            toast.success('This is just a demo.. Thanks for Check')
        }
    }
    return (
        <>
            <form className='py-3 border p-5 rounded-md' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="text-white mx-auto hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mt-10 border-2 border-orange-500 cursor-pointer" type="submit" disabled={!stripe}>
                    Payment
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;
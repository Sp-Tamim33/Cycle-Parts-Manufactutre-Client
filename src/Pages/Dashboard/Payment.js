import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51LR8GBLSTYieegP3FSCCaK5FW2E2xL48x8Tg4EeP0nyOoXQ1uYd2urvf7L211ogOOmRFqzQyM95q1Yln39BVld2o00VYBrJVYR');
const Payment = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://cycle-tools-server-production.up.railway.app/orders/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div className='flex justify-center items-center py-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hello <span className='text-orange-500 font-bold'>{product.name}</span></h2>
                    <h2 className="card-title">Pay For <span className='text-orange-500 font-bold'>{product.productName}</span></h2>
                    <p>Please pay : <span className='text-orange-500 font-bold'>{product.price}</span>$</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Shared/HomePage.css'

const Product = ({ product }) => {
    const { name, img, description, price, MinimumOrder, available } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/purchase/${product._id}`)
    }
    return (
        <div>
            <div className="card card-compact w-96 shadow-xl bg-orange-200 m-5 rounded-md product-card">
                <figure><img src={img} alt="Cycle Parts" className='rounded-md' /></figure>
                <div className="card-body py-10 px-5">
                    <h2 className="card-title text-3xl font-semibold text-black">{name}</h2>
                    <p className='py-3 font-sans font-semibold text-black'><u><b>Description</b></u> :- {description}</p>
                    <div className=''>
                        <p className='text-md py-2 font-medium text-black'><u><b>Price</b></u> :- {price}$</p>
                        <p className='text-md py-2 font-medium text-black'><u><b>Minimub Order</b></u> :- {MinimumOrder}pcs</p>
                        <p className='text-md py-2 font-medium text-black'><u><b>Available Item</b></u> :- {available}pcs</p>
                    </div>
                    <button onClick={() => handlePurchase(product._id)} type="button" className="hover:text-orange-500 w-full bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
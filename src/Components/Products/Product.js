import React from 'react';
import '../../Shared/HomePage.css'

const Product = ({ product }) => {
    const { name, img, description, price, MinimumOrder, available } = product;
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl bg-orange-200 m-5 rounded-md product-card">
                <figure><img src={img} alt="Cycle Parts" className='rounded-md' /></figure>
                <div class="card-body py-10 px-5">
                    <h2 class="card-title text-3xl font-semibold">{name}</h2>
                    <p className='py-3 font-sans font-semibold'><u><b>Description</b></u> :- {description}</p>
                    <div className=''>
                        <p className='text-md py-2 font-medium'><u><b>Price</b></u> :- {price}$</p>
                        <p className='text-md py-2 font-medium'><u><b>Minimub Order</b></u> :- {MinimumOrder}pcs</p>
                        <p className='text-md py-2 font-medium'><u><b>Available Item</b></u> :- {available}pcs</p>
                    </div>
                    <button type="button" class="hover:text-orange-500 w-full bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
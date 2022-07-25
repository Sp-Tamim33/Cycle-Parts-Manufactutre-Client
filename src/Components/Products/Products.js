import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts'
import Heading from '../Heading/Heading';
import Product from './Product';

const Products = () => {
    const [products] = useProducts()


    return (
        <div className='py-[60px]'>
            <Heading text="Our Latest Product" />

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-20'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                }
            </div>
            <Link to='/products' className="hover:text-orange-500 ml-20 md:ml-[650px] md:-mt-8 bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">See More Products.....</Link>


        </div>
    );
};

export default Products;
import React from 'react';
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



        </div>
    );
};

export default Products;
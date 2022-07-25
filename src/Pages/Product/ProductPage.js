import React from 'react';
import Heading from '../../Components/Heading/Heading';
import useProducts from '../../Hooks/useProducts';
import Product from '../../Components/Products/Product'

const ProductPage = () => {
    const [products] = useProducts();
    return (
        <div className='text-white'>
            <Heading text="Our Latest Product" />

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-20'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductPage;
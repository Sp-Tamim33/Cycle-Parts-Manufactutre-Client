import React from 'react';
import Heading from '../../Components/Heading/Heading';
import useProducts from '../../Hooks/useProducts';
import Product from '../../Components/Products/Product'
import Loading from '../../Components/Loading/Loading';

const ProductPage = () => {
    const [products, loading] = useProducts();
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Heading text="Our Latest Product" />

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto py-20'>
                {
                    [...products].reverse().map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductPage;
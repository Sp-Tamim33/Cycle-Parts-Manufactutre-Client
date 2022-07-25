import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


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
import React from 'react';
import useProducts from '../../Hooks/useProducts';
import toast from 'react-hot-toast';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const userConfirm = window.confirm('are you sure to delete ?')
        if (userConfirm) {
            fetch(`https://ancient-citadel-87050.herokuapp.com/product/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                        toast.success('Delete Item Successfully!')
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-white text-3xl px-3 my-3">Manage All Products</h1>
            <div class="overflow-x-auto py-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='border text-left'>
                            <th className='border pl-3 text-xl font-semibold'></th>
                            <th className='border pl-3 text-xl font-semibold'>Product Name</th>
                            <th className='border pl-3 text-xl font-semibold'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((order, index) =>
                                <tr key={order._id} className='border'>
                                    <th className='border pl-3 p-5'>{index + 1}</th>
                                    <td className='border pl-3 p-5'>{order.name}</td>
                                    <td className='border pl-3 p-5'><button onClick={() => handleDelete(order._id)} className='bg-orange-500 p-3 rounded-md hover:bg-black border border-orange-500 duration-500 cursor-pointer'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
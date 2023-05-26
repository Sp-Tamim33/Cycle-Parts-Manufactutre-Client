import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageApiKey = '5d7e95b547e875bb761ad5659e73286a';
    const onSubmit = data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        price: data.price,
                        MinimumOrder: data.minimumOrder,
                        available: data.available
                    }
                    fetch('https://cycle-tools-server-production.up.railway.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            reset()
                            console.log(inserted)
                            toast.success('Product Added in Database')
                        })
                }
            })
    }
    return (
        <div>
            <section className="lg:pl-10 pt-10">
                <div className="shadow-lg bg-slate-600 rounded-lg  w-full lg:w-10/12 p-5 md:px-10 ">
                    <h2 className=" pb-10 pt-10 text-xl lg:text-2xl text-orange-500 font-bold">
                        Add Product
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 ">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Product Name</label>
                                <input
                                    id='name'
                                    required
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter Product Name"
                                    {...register("name")}
                                />
                            </div>
                            <div className="mb-3 ">

                                <label for="file_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Product Photo</label>
                                <input {...register("image")} required class="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" id="file_input" type="file" />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Product Description</label>
                                <textarea {...register("description")} required id="message" rows="4" class="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Product Description"></textarea>
                            </div>
                        </div>


                        <div className='py-2'>
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Product Price</label>
                            <input
                                id='price'
                                required
                                className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                placeholder="Enter Product Price"
                                {...register("price")}
                            />
                        </div>
                        <div className='py-2'>
                            <label for="minimumOrder" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Minimum Order</label>
                            <input
                                id='minimumOrder'
                                required
                                className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                placeholder="Enter Product Minimum Order for customer"
                                {...register("minimumOrder")}
                            />
                        </div>
                        <div className='py-2'>
                            <label for="available" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Available Product</label>
                            <input
                                id='available'
                                required
                                className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                placeholder="Enter Available Product"
                                {...register("available")}
                            />
                        </div>

                        <div className="mt-5">
                            <input
                                className={`text-white border-2 hover:border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-5 py-2 rounded-md text-xl font-semibold mx-3 cursor-pointer`}
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;
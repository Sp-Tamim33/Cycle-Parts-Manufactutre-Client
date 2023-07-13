import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddRivew = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageApiKey = '5d7e95b547e875bb761ad5659e73286a';
    const onSubmit = data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        position: data.position,
                        rating: data.rating,
                        img: img,
                        description: data.description,

                    }
                    fetch(`https://cycle-tools-server.onrender.com/reviews`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Thanks for your Review!')
                            }
                        })
                }
            })
        reset()
    }



    return (
        <div>
            <section className="lg:pl-10 pt-10">
                <div className="shadow-lg bg-slate-600 rounded-lg  w-full lg:w-10/12 p-5 md:px-10 ">
                    <h2 className=" pb-10 pt-10 text-xl lg:text-2xl text-orange-500 font-bold">
                        Add Feedback
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 ">
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Name</label>
                                <input
                                    id='name'
                                    required
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter Name"
                                    {...register("name")}
                                />
                            </div>
                            <div>
                                <label for="position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your position</label>
                                <input
                                    id='position'
                                    required
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter Name"
                                    {...register("position")}
                                />
                            </div>
                            <div>
                                <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add Rating</label>
                                <input
                                    id='rating'
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter a Rating"
                                    type="number"
                                    {...register("rating")}
                                />
                            </div>
                        </div>
                        <div className="mb-3 ">

                            <label for="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Add Your Photo</label>
                            <input {...register("image")} required className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" id="file_input" type="file" />
                        </div>

                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea {...register("description")} required id="message" rows="4" className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Your Opinion..."></textarea>
                        </div>

                        <div className="mt-5">
                            <input
                                className={`text-white border-2 hover:border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-5 py-2 rounded-md text-xl font-semibold mx-3`}
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddRivew;
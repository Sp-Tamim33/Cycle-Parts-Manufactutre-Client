import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddBlog = () => {
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
                    const blog = {
                        img: img,
                        name: data.name,
                        question: data.question,
                        description: data.description
                    }
                    fetch('https://cycle-tools-server-production.up.railway.app/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            reset()
                            console.log(inserted)
                            toast.success('Blog Uploaded Complete')
                        })
                }
            })
    }
    return (
        <div>
            <section className="lg:pl-10 pt-10">
                <div className="shadow-lg bg-slate-600 rounded-lg  w-full lg:w-10/12 p-5 md:px-10 ">
                    <h2 className=" pb-10 pt-10 text-xl lg:text-2xl text-orange-500 font-bold">
                        Add a new Blog
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 ">

                            <div className="mb-3 ">
                                <label for="file_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Image</label>
                                <input {...register("image")} required className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" id="file_input" type="file" />
                            </div>
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Writer Name</label>
                                <input
                                    id='name'
                                    required
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter Writer Name"
                                    {...register("name")}
                                />
                            </div>
                            <div className='py-2'>
                                <label for="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Question</label>
                                <input
                                    id='question'
                                    required
                                    className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                    placeholder="Enter Blog Question"
                                    {...register("question")}
                                />
                            </div>
                            <div>
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Description</label>
                                <textarea {...register("description")} required id="description" rows="4" className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Blog Description"></textarea>
                            </div>
                        </div>

                        <div className="mt-5">
                            <input
                                className={`text-white border-2 hover:border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-5 py-2 rounded-md text-xl font-semibold mx-3 cursor-pointer`}
                                type="submit" value='Post'
                            />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddBlog;
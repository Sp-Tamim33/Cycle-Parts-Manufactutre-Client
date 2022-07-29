import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-3">
                <figure class="px-10 pt-10">
                    <img src={blog.img} alt="blog_img" class="rounded-xl" />
                </figure>
                <div class="card-body items-center">
                    <h2 class="card-title text-white">{blog.question}</h2>
                    <span className='text-left underline'>Author: {blog.name}</span>
                    <p>{blog.description.length < 30 ? blog.description : blog.description.slice(0, 100)} ......<button onClick={() => handleReadMore(blog._id)} className='text-orange-500'>Read More</button></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
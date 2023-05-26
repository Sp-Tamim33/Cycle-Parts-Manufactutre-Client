import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const navigate = useNavigate()
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <div>
            <div className="card px-10 mx-10 bg-base-100 shadow-xl my-3">
                <figure className="px-10 pt-10">
                    <img src={blog.img} alt="blog_img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title text-white">{blog.question}</h2>
                    <span className='text-left underline'>Author: {blog.name}</span>
                    <p>{blog.description.length < 30 ? blog.description : blog.description.slice(0, 100)} ......<button onClick={() => handleReadMore(blog._id)} className='text-orange-500'>Read More</button></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
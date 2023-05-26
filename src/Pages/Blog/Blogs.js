import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://cycle-tools-server-production.up.railway.app/blogs', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-10'>
                {
                    [...blogs].reverse().map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;
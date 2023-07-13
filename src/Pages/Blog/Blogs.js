import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Loading from '../../Components/Loading/Loading';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://cycle-tools-server.onrender.com/blogs', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <Loading />
    }
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
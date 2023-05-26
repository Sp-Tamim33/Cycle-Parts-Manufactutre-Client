import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://cycle-tools-server-production.up.railway.app/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 className="text-white text-2xl py-5 px-3 font-semibold">User Limit = <span className='text-orange-500'>{users.length}</span></h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Length</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
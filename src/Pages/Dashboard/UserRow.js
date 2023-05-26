import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index }) => {


    const makeAdmin = () => {
        fetch(`https://cycle-tools-server-production.up.railway.app/users/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    toast.error('Failed to make admin')
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Made Admin Successfully !')
                    toast('please reload webpage')
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;
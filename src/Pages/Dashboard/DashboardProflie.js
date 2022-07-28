
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import userProffile from '../../assests/img/userProfile.jpg';
import Loading from '../../Components/Loading/Loading';
import auth from '../../FirebaseInit/Firerebase.Init';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const DashboardProflie = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(updatedUser => setUserInfo(updatedUser))
    }, [user, userInfo])


    if (loading) {
        return <Loading />
    }


    const imageApiKey = '5d7e95b547e875bb761ad5659e73286a';

    const onSubmit = async data => {
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
                    const updatedDoc = {
                        img: result.data.url,
                        name: data.name,
                        phone: data.phone,
                        address: data.address,
                        education: data.education,
                        linkedin: data.linkedin,
                        facebook: data.facebook,
                        email: user.email
                    }
                    fetch(`http://localhost:5000/users/${user.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updatedDoc)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('your information updated!');
                                reset()
                            }
                        })
                }
            })
    }
    return (
        <section>
            <h2 className="ml-10 mt-5 text-2xl font-bold text-orange-500">
                My Profile
            </h2>
            <div className="py-10 px-10 ">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img
                            src={userInfo.img || userProffile}
                            alt=""
                        />
                    </div>
                </div>
                <div className=" pt-5">
                    <ul>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Name:</span>
                            <span className="ml-5 text-gray-500">{user?.displayName || userInfo.name}</span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Email:</span>
                            <span className="ml-5 text-gray-500">{user?.email}</span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Phone:</span>
                            <span className="ml-5 text-gray-500">
                                {userInfo.phone}
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Address:</span>
                            <span className="ml-5 text-gray-500">
                                {userInfo.address}
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Education:</span>
                            <span className="ml-5 text-gray-500">
                                {userInfo.education}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className=" pt-5 border-t-2">
                    <h3 className=" mb-3 mt-1 text-2xl font-bold text-orange-500">
                        Add Social Media Link
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Linkedin:</span>
                            <span className="ml-5 text-gray-500">
                                {userInfo.linkedin}
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Facebook:</span>
                            <span className="ml-5 text-gray-500">
                                {userInfo.facebook}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mb-10 cursor-pointer">
                <label
                    htmlFor="my-modal-3"
                    className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 border-2 border-orange-500 cursor-pointer"
                >
                    Update Profile
                </label>
            </div>



            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn bg-orange-500 text-black hover:bg-orange-500 hover:text-black btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold py-4">Update Your Profile !</h3>
                    <form onSubmit={handleSubmit(onSubmit)} class="form-control w-full max-w-xs">
                        {/* photo  */}
                        <div className='py-2'>
                            <label htmlFor="">picture</label>
                            <input required name='photo' type="file" class="input input-bordered w-full max-w-xs" {...register("image")} />
                        </div>
                        {/* name  */}
                        <div className='py-2'>
                            <input {...register("name")} required name='name' type="text" placeholder="your name*" class="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* phone  */}
                        <div className='py-2'>
                            <input required name='phone' type="text" placeholder="your phone*" class="input input-bordered w-full max-w-xs" {...register("phone")} />
                        </div>
                        {/* address  */}
                        <div className='py-2'>
                            <input required {...register("address")} name='address' type="text" placeholder="your address*" class="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* education  */}
                        <div className='py-2'>
                            <input required {...register("education")} name='education' type="text" placeholder="your education*" class="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* linkedin  */}
                        <div className='py-2'>
                            <input required {...register("linkedin")} name='linkedin' type="text" placeholder="linkedin*" class="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* education  */}
                        <div className='py-2'>
                            <input required {...register("facebook")} name='facebook' type="text" placeholder="facebook*" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="modal-action">
                            <button type='submit' for="my-modal-3" className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 border-2 border-orange-500 cursor-pointer ml-[-40px]">update</button>
                        </div>
                    </form>
                </div>
            </div>


        </section >
    );
};

export default DashboardProflie;
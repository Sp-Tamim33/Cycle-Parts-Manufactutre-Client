
import React from 'react';
import userProffile from '../../assests/img/userProfile.jpg';

const DashboardProflie = () => {
    return (
        <section>
            <h2 className="ml-10 mt-5 text-2xl font-bold text-orange-500">
                My Profile
            </h2>
            <div className="py-10 px-10 ">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img
                            src={userProffile}
                            alt=""
                        />
                    </div>
                </div>
                <div className=" pt-5">
                    <ul>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Name:</span>
                            <span className="ml-5 text-gray-500">Your Name</span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Email:</span>
                            <span className="ml-5 text-gray-500">Your Email</span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Phone:</span>
                            <span className="ml-5 text-gray-500">
                                your phone number
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Address:</span>
                            <span className="ml-5 text-gray-500">
                                your address
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Education:</span>
                            <span className="ml-5 text-gray-500">
                                your education
                            </span>
                        </li>
                    </ul>
                </div>
                <div className=" pt-5 border-t-2">
                    <h3 className=" mb-3 mt-1 text-2xl font-bold text-secondary text-orange-500">
                        Add Social Media Link
                    </h3>
                    <ul>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Linkedin:</span>
                            <span className="ml-5 text-gray-500">
                                your linkedin
                            </span>
                        </li>
                        <li className="mb-2">
                            <span className="text-xl font-bold">Facebook:</span>
                            <span className="ml-5 text-gray-500">
                                your facebook
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mb-10 cursor-pointer">
                <label
                    htmlFor="profile-update-modal"
                    className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 border-2 border-orange-500 cursor-pointer"
                >
                    Update Profile
                </label>
            </div>
        </section>
    );
};

export default DashboardProflie;
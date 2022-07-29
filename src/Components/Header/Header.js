import React, { useRef, useState } from 'react';
import { Transition } from "@headlessui/react";
import { signOut } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FirebaseInit/Firerebase.Init';
import ActiveLink from '../ActiveLink/ActiveLink';

import NavbarLogo from './../../assests/img/nagbarLogo.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const divRef = useRef();
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    }
    return (
        <div>
            <div>
                <nav className="shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-5 flex justify-between md:block">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink-0">
                                    <Link to="/" className="flex">
                                        <img className="w-10 h-10 mt-1" src={NavbarLogo} alt="" />
                                        <h1 className="text-3xl font-sans navbar-logo-text text-white"><span className="text-orange-500 text-4xl font-semibold">C</span>ycles-<span className="text-orange-500 text-4xl font-semibold">P</span>arts</h1>
                                    </Link>
                                </div>
                                <div className="hidden md:block md:pl-10">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <div>
                                            <ActiveLink
                                                to="/"
                                                className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3`}
                                            >
                                                Home
                                            </ActiveLink>

                                            <ActiveLink
                                                to="/portfolio"
                                                className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3`}
                                            >
                                                Portfolio
                                            </ActiveLink>

                                            <ActiveLink
                                                to="/products"
                                                className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3`}
                                            >
                                                Products
                                            </ActiveLink>
                                            <ActiveLink
                                                to="/blog"
                                                className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3`}
                                            >
                                                Blog
                                            </ActiveLink>

                                            <ActiveLink
                                                to="/contact"
                                                className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3`}
                                            >
                                                Contact
                                            </ActiveLink>
                                            {
                                                user && <button
                                                    onClick={logout}
                                                    className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3"
                                                >
                                                    Signuot
                                                </button>
                                            }
                                            {
                                                user ?


                                                    <Link to='/dashboard' className="border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold">
                                                        Dashboard
                                                    </Link>

                                                    :
                                                    <>
                                                        <ActiveLink
                                                            to="/signin"
                                                            className="mr-2 border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                                        >
                                                            SignIn
                                                        </ActiveLink>
                                                        <ActiveLink
                                                            to="/signup"
                                                            className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                                        >
                                                            SignUp
                                                        </ActiveLink>
                                                    </>

                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-orange-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={divRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <ActiveLink
                                        to="home"
                                        className="text-white px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        Home
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/portfolio"
                                        className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Portfolio
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/products"
                                        className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Products
                                    </ActiveLink>
                                    <ActiveLink
                                        to="/blog"
                                        className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Blog
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/contact"
                                        className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Contact
                                    </ActiveLink>




                                    {
                                        user ?
                                            <div>
                                                <button
                                                    onClick={logout}
                                                    className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    SignOut
                                                </button>
                                                <ActiveLink
                                                    to="dashboard/profile"
                                                    className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    Dashboard
                                                </ActiveLink>
                                            </div>
                                            :
                                            <div>
                                                <ActiveLink
                                                    to="signin"
                                                    className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    Signin
                                                </ActiveLink>

                                                <ActiveLink
                                                    to="signup"
                                                    className="block text-white px-3 py-2 rounded-md text-base font-medium"
                                                >
                                                    SignUp
                                                </ActiveLink>
                                            </div>
                                    }
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>


            </div>

        </div>
    );
};

export default Header;
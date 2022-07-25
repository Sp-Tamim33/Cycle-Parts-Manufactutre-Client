import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import './Navbar.css'
import NavbarLogo from './../../assests/img/nagbarLogo.png'
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef();
    return (
        <div>
            <nav className="navbar">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-3 flex justify-between md:block">
                        <div className="flex justify-between items-center">
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex">
                                    <img className="w-10 h-10 mt-1" src={NavbarLogo} alt="" />
                                    <h1 className="text-3xl font-sans navbar-logo-text"><span className="text-orange-500 text-4xl font-semibold">C</span>ycles-<span className="text-orange-500 text-4xl font-semibold">P</span>arts</h1>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <ActiveLink
                                        to="/"
                                        className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        Home
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/portfolio"
                                        className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        Portfolio
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/products"
                                        className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        Products
                                    </ActiveLink>

                                    <ActiveLink
                                        to="/contact"
                                        className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        Contact
                                    </ActiveLink>
                                    <ActiveLink
                                        to="/signin"
                                        className="border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        SignIn
                                    </ActiveLink>
                                    <ActiveLink
                                        to="/signup"
                                        className="text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold"
                                    >
                                        SignUp
                                    </ActiveLink>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-orange-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-white hover:border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-500 focus:ring-white"
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
                                    to="/home"
                                    className="hover:bg-orange-500 hover:text-black text-white block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    Home
                                </ActiveLink>

                                <ActiveLink
                                    to="/portfolio"
                                    className="text-white hover:bg-orange-500 hover:text-black block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    Portfolio
                                </ActiveLink>

                                <ActiveLink
                                    to="/products"
                                    className="text-white hover:bg-orange-500 hover:text-black block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    Products
                                </ActiveLink>


                                <ActiveLink
                                    to="/contact"
                                    className="text-white hover:bg-orange-500 hover:text-black block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    Contact
                                </ActiveLink>
                                <ActiveLink
                                    to="/signin"
                                    className="text-white hover:bg-orange-500 hover:text-black block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    SignIn
                                </ActiveLink>
                                <ActiveLink
                                    to="/signup"
                                    className="text-white hover:bg-orange-500 hover:text-black block px-3 py-2 rounded-md text-xl font-semibold"
                                >
                                    SignUP
                                </ActiveLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


        </div>
    );
}

export default Navbar;

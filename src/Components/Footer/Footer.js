import React from 'react';
import NavbarLogo from '../../assests/img/nagbarLogo.png'

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-400 bg-black body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href="/" className="flex">
                            <img className="w-10 h-10 mt-1" src={NavbarLogo} alt="" />
                            <h1 className="text-xl font-sans navbar-logo-text"><span className="text-orange-500 text-4xl font-semibold">C</span>ycles-<span className="text-orange-500 text-4xl font-semibold">P</span>arts</h1>
                        </a>
                        <p class="mt-2 text-sm text-gray-500">buy Cycle Parts in cheap rate.</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Information</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Our Company</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Contact Us</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Our Service</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Why We?</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Home</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Products</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Contact</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Portfolio</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Supports</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Return Policy</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Money Back</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Online Support</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Customer Satisfaction</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Conditions</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Terms &#38; Conditon</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Delivary Terms</a>
                                </li>
                                <li>
                                    <a href='home' class="text-gray-400 hover:text-white">Security</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-[#0a0f12] bg-opacity-75">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-400 text-sm text-center sm:text-left">© 2022 CycleParts —
                            <a href='https://www.facebook.com/Sp.Tamim33' rel="noopener noreferrer" class="text-orange-500 ml-1" target="_blank">@SP_Tamim</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href='https://www.facebook.com/Sp.Tamim33' class="text-blue-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href='https://twitter.com/SpTamim33' class="ml-3 text-blue-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/sp.tamim33/' class="ml-3 text-orange-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href='https://www.linkedin.com/in/sptamim33/' class="ml-3 text-blue-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
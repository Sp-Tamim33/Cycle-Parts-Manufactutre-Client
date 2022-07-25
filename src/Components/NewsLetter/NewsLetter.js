import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section class="py-10 bg-black overflow-hidden">
                <div class="container mx-auto px-4">
                    <div class="max-w-lg mx-auto text-center mb-14">
                        <h2 class="mb-5 font-heading font-semibold text-3xl md:text-4xl text-white">Subscribe Our Newsletter</h2>
                        <p class="text-gray-400 text-lg">Subscribe our newsletter for get product discount update</p>
                    </div>
                    <div class="flex flex-wrap max-w-xl mx-auto -m-2.5">
                        <div class="w-full p-2.5">
                            <input class="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-orange-500 placeholder-gray-500 rounded" type="text" placeholder="Your name" />
                        </div>
                        <div class="w-full p-2.5">
                            <input class="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-orange-500 placeholder-gray-500 rounded" type="text" placeholder="Your email address" />
                        </div>
                        <div class="w-full p-2.5">
                            <div class="group relative">
                                <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded transition ease-out duration-300"></div>
                                <button class="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded">
                                    <div class="relative p-5 px-11 bg-gradient-green overflow-hidden rounded">
                                        <button type="button" class="hover:text-orange-500 w-full bg-orange-500 text-white font-semibold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">Subscribe Now</button>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;
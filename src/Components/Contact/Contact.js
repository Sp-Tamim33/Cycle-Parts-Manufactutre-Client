import React from 'react';
import Heading from '../Heading/Heading';


const style = { filter: "grayscale(1) contrast(1.2) opacity(0.4)" }
const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className='pt-10'>
                <Heading text='Contact With Us' />
            </div>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-[700px] md:w-[300px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={style}></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">San-frasisco State America USA</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href='home' className="text-orange-500 leading-relaxed">cycleparts@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">+123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[600px] md:w-[600px] bg-black flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0 md:p-20 rounded-md">
                    <h2 className="text-white text-2xl mb-1 font-medium title-font">Contact Form</h2>
                    <p className="leading-relaxed mb-5 text-gray-300">Need Help? or Have any question? Feel free to Contact us</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-white">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-white">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-white">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-300 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button type="button" className="hover:text-orange-500 w-full bg-orange-500 text-white font-semibold border-2 border-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 rounded-lg text-xl px-5 py-2.5 mt-5 duration-500 text-center mr-2 mb-2 dark:border-orange-500 dark:text-white  dark:hover:bg-orange-200 dark:focus:ring-orange-500">Send Message</button>

                </div>
            </div>
        </section>
    );
};

export default Contact;
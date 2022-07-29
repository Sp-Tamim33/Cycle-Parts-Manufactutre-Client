import React from 'react';
import { Icon } from '@iconify/react';
import myProfile from '../../assests/img/myProflie.jpg';
import './PortfolioPage.css'

const Portfolio = () => {
    const blank = '_blank'
    return (
        <div>
            <div className='max-w-7xl mx-auto bg-slate-900 py-16 my-16 shadow-md rounded-md shadow-slate-400 portfolio-main-div'>
                {/* Heading */}
                <div className='about-heading'>
                    <img src={myProfile} className='rounded-full w-48 h-48 mx-auto' alt="" />
                    <h1 className='text-3xl font-sans font-semibold text-center text-white py-2'>SP TAMIM</h1>
                    <p className='text-md font-sans font-semibold text-orange-500 text-center'>MERN Stack Developer</p>
                    <p className='text-sm font-sans font-semibold text-orange-500 text-center py-2'>sp.tam11m@gmail.com</p>
                    <a href="https://sp-tamim.netlify.app/" className='block underline text-sm font-sans font-semibold text-blue-500 text-center py-2'>Personal Portfolio</a>
                    <div className='max-w-sm mx-auto'>
                        <ul class="flex flex-wrap items-center mt-5 text-sm sm:mb-0">
                            <li className='px-5 text-3xl'>
                                <a href="https://www.facebook.com/Sp.Tamim33" target={blank} class="mr-4 md:mr-2 text-blue-500">
                                    <Icon icon="il:facebook" /></a>
                            </li>
                            <li className='px-5 text-3xl'>
                                <a href="https://www.instagram.com/sp.tamim33/" target={blank} class="mr-4 text-black md:mr-2">
                                    <div className='instagram'>
                                        <Icon icon="ant-design:instagram-filled" />
                                    </div>
                                </a>
                            </li>
                            <li className='px-5 text-3xl'>
                                <a href="https://twitter.com/SpTamim33" target={blank} class="mr-4 text-[#00b9ff] md:mr-6 ">
                                    <Icon icon="akar-icons:twitter-fill" /></a>
                            </li>
                            <li className='px-5 text-3xl'>
                                <a href="https://github.com/Sp-Tamim33" target={blank} class="mr-4 text-orange-500 md:mr-6 ">
                                    <Icon icon="akar-icons:github-fill" /></a>
                            </li>
                            <li className='px-5 text-3xl'>
                                <a href="https://www.linkedin.com/in/sptamim33/" target={blank} class="mr-4 text-blue-500 md:mr-6 "><Icon icon="akar-icons:linkedin-box-fill" /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='px-20 py-10'>
                    {/* About */}
                    <div>
                        <h1 className='text-white fotn-semibold text-xl'>About Me :</h1>
                        <p className='text-white py-2 md:px-10'>I’m SP TAMIM, a Student and MERN Developer with 3 years of experience. Last 1.5 years, I have learned many Languages, Tools 	&#38; Technologies. I have completed 55+ small projects recently and have 1.5 years of Coding Experience with Bug Fixing I loves to create web application using ReactJS ! Building simple website using HTML, CSS, JavaScript.Creating simple APIs by NodeJS and ExpressJS with MongoDB as database.</p>


                        <h1 className='text-white fotn-semibold text-xl mt-10'>My Skills :</h1>
                        <p className='text-white px-10 py-2'>HTML
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>CSS
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>Bootstrap
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>Tailwind
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>JS
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>React JS
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>Node JS (backend)
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>Express JS
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                        </p>
                        <p className='text-white px-10 py-2'>Mongodb (database)
                            <div class="w-[200px] md:w-[500px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-orange-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
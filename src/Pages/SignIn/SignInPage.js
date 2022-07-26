import React from 'react';
import { Icon } from '@iconify/react';
import loginPic from '../../assests/img/login.svg'
import { Link, Navigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit/Firerebase.Init';
import { toast } from 'react-toastify';

const SignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleError) {
        return toast.error(googleError.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (googleLoading) {
        return <Loading />;
    }
    if (googleUser) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <section class="h-screen">
            <div class="px-6 h-full text-white">
                <div
                    class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src={loginPic}
                            class="w-full"
                            alt=""
                        />
                    </div>
                    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-4xl py-10 underline underline-offset-2'>Please SignIn !</h1>
                        <form>
                            <div class="flex flex-row items-center justify-center lg:justify-start">
                                <p class="text-lg mb-0 mr-4">Sign in with</p>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    class="inline-block p-3 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none hover:text-orange-500 focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out mx-1"
                                ><Icon icon="ion:logo-google" className='text-xl' />
                                </button>
                            </div>

                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p class="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                />
                            </div>

                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label class="form-check-label inline-block text-white" for="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                                <a href="#!" class="text-white">Forgot password?</a>
                            </div>

                            <div class="text-center lg:text-left">
                                <button
                                    type="button"
                                    class="inline-block px-7 py-3 bg-orange-500 text-white font-medium text-xl leading-snug rounded shadow-md hover:bg-white hover:text-orange-500 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out border-2 border-orange-500"
                                >
                                    Signin
                                </button>
                                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        class="text-orange-500 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Register/Signup</Link
                                    >
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
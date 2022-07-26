import React from 'react';
import { Icon } from '@iconify/react';
import Signup from '../../assests/img/signup.svg'
import { Link, Navigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit/Firerebase.Init';
import Loading from '../../Components/Loading/Loading';

import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


const SignUp = () => {
    // google login 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // for submit 
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //Signup Email nad Pass
    const [
        createUserWithEmailAndPassword,
        emailAndPassUser,
        emailAndPassLoading,
        emailAndPassError,
    ] = useCreateUserWithEmailAndPassword(auth);


    // Google login
    if (googleError) {
        toast.error(googleError)
    }
    if (emailAndPassError) {
        toast.error(emailAndPassError)
    }
    if (googleLoading || emailAndPassLoading) {
        return <Loading />;
    }
    if (googleUser || emailAndPassUser) {
        return <Navigate to='/' replace={true} />
    }


    // Signup Submit 
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        reset()
        toast.success("Signup Successfully Done !")
    };




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
                            src={Signup}
                            class="w-full"
                            alt=""
                        />
                    </div>
                    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-4xl py-10 underline underline-offset-2'>Please Signup !</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="flex flex-row items-center justify-center lg:justify-start">
                                <p class="text-lg mb-0 mr-4">Signup with</p>
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


                            {/* <!-- Name input --> */}
                            <div class="mb-6">
                                <input
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Your Name"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Name Must Required*"
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.firstName?.type === 'required' && <span className='text-red-500'>{errors.firstName.message}</span>}
                                </label>

                            </div>

                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    type="email"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email Must Required*"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Enter A Valid Email*"
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password Must Required*"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Password Must be 6 charecter or longer*"
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>


                            {/* pass end */}
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
                            </div>

                            <div class="text-center lg:text-left">
                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-orange-500 text-white font-medium text-xl leading-snug rounded shadow-md hover:bg-white hover:text-orange-500 hover:shadow-lg focus:bg-white focus:text-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out border-2 border-orange-500"
                                >
                                    Signup
                                </button>
                                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already Have an account?
                                    <Link
                                        to="/signin"
                                        class="text-orange-500 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Signin/Login</Link
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

export default SignUp;
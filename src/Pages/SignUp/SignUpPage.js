import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Signup from '../../assests/img/signup.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseInit/Firerebase.Init';
import Loading from '../../Components/Loading/Loading';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';


const SignUp = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
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
    const [token] = useToken(emailAndPassUser || googleUser);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (emailAndPassUser || googleUser) {
            navigate(from);
            toast.success('Account Created Successfully')
        }
    }, [emailAndPassUser, from, googleUser, navigate]);
    // Google login
    if (googleError) {
        toast.error(googleError)
    }
    if (emailAndPassError) {
        toast.error(emailAndPassError)
    }
    if (error) {
        toast.error(error)
    }
    if (googleLoading || emailAndPassLoading || updating) {
        return <Loading />;
    }
    if (token) {
        <Navigate to='/dashboard/profile' replace={true} />
    }


    // Signup Submit 
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.firstName })
        reset()
        toast.success("Signup Successfully Done !")
    };




    return (
        <section className="h-screen">
            <div className="px-6 h-full text-white">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src={Signup}
                            className="w-full"
                            alt=""
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-4xl py-10 underline underline-offset-2'>Please Signup !</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Signup with</p>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none hover:text-orange-500 focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out mx-1"
                                ><Icon icon="ion:logo-google" className='text-xl' />
                                </button>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>


                            {/* <!-- Name input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Your Name"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Name Must Required*"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className='text-red-500'>{errors.firstName.message}</span>}
                                </label>

                            </div>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
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
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>


                            {/* pass end */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label className="form-check-label inline-block text-white" for="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-orange-500 text-white font-medium text-xl leading-snug rounded shadow-md hover:bg-white hover:text-orange-500 hover:shadow-lg focus:bg-white focus:text-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out border-2 border-orange-500"
                                >
                                    Signup
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already Have an account?
                                    <Link
                                        to="/signin"
                                        className="text-orange-500 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
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
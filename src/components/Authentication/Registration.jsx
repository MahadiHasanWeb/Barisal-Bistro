import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="container mb-10 mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign Up</h1>
                    <p className="text-gray-500">Create a new account</p>
                </div>

                <div className="m-6">
                    <form className="mb-4">
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Photo</label>
                            <input type="text" name="photo" id="photo" placeholder="Your Photo Url" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div className="mb-6">
                            <button type="button" className="w-full px-3 py-4 text-white bg-[#00ADB5] rounded-md hover:bg-[#08c5cf] focus:outline-none duration-100 ease-in-out">Sign up</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Already have an account?
                            <Link to='/login' className="font-semibold text-[#00ADB5] focus:text-[#00ADB5] focus:outline-none focus:underline">Sign in</Link>.
                        </p>
                    </form>

                    <div className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out"> <FaGoogle />
                            Google
                        </button>
                        <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out"> <FaGithub />
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
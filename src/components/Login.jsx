import React from 'react'
import Schedule from './Schedule'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
            <div className='grid grid-cols-1 lg:grid-cols-3  '>
                <div className='hidden lg:block col-span-2 bg-primary-color h-screen place-content-center'><Schedule /></div>

                <div className='flex justify-center items-center  container px-5 mx-auto'>
                    <div className=' flex flex-col gap-8 items-center  w-full border border-gray-400  p-5 rounded-xl shadow-md mx-auto'>
                        <div><img src="\lightning-kids-logo.webp" /></div>
                        <form action="" className='flex flex-col gap-5 w-full font-geist'>
                            <div class="relative">
                                <input type="text" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                            </div>
                            <div class="relative">
                                <input type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                <label for="password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                            </div>
                            <button className='bg-primary-color hover:bg-secondary-hover rounded font-geist text-black py-2 px-5 font-medium '>Submit</button>
                        <div className='flex gap-1 justify-end items-end font-medium'><p>New Here?</p>
                            <button onClick={()=> navigate('/signup')} className='text-blue-600 underline font-medium' href="">Login</button></div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
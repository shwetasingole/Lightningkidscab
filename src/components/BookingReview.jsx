import React from 'react'
import ProgressBar from './ProgressBar'
const BookingReview = () => {
    return (
        <div>
            <div className='flex bg-primary-color items-center justify-center mx-auto shadow-md  py-10 overflow-auto h-screen'>
                <div className='flex flex-col items-center justify-between container mx-auto w-fit px-7 '>
                    <ProgressBar num1="✔️" num2="✔️" num3="3" num4="4" />
                    <div className='w-full'>
                        <div className='flex flex-col gap-5  bg-white justify-center w-full px-10 border border-gray-400 p-5 rounded-xl shadow-xl mx-auto'>
                            <div><h1 className='text-3xl font-semibold font-geist'>Day Availability Summary</h1></div>
                            <div>

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg font-geist">
                                    <table class="w-full  text-left rtl:text-right  border border-gray-300 shadow dark:text-gray-400">
                                        <thead class=" bg-black text-white uppercase  border-gray-600 font-semibold p-5 ">
                                            <tr>
                                                <th scope="col" class="px-6 py-5">
                                                    Day
                                                </th>
                                                <th scope="col" class="px-6 py-5">
                                                    Before School
                                                </th>
                                                <th scope="col" class="px-6 py-5">
                                                   After School
                                                </th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white text-black   odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                                                    Monday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                    Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                    Unavailable
                                                </td>
                                           
                                               
                                            </tr>
                                            <tr class="bg-white border-b  text-black   odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    Tuesday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                Unavailable
                                                </td>
                                          </tr>
                                            <tr class="bg-white  text-black     odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    Wednesday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                Unavailable
                                                </td>
                                              
                                                
                                            </tr>     
                                            <tr class="bg-white  text-black    odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    Thursday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                Unavailable
                                                </td>
                                              
                                                
                                            </tr>    
                                            <tr class="bg-white  text-black     odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    Friday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                Unavailable
                                                </td>
                                              
                                                
                                            </tr> 
                                            <tr class="bg-white  text-black     odd:bg-yellow-100 even:bg-white">
                                                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                                    Saturday
                                                </th>
                                                <td class="px-6 py-4 text-green-600">
                                                Available
                                                </td>
                                                <td class="px-6 py-4 text-red-600">
                                                Unavailable
                                                </td>
                                              
                                                
                                            </tr>           
                                               
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingReview
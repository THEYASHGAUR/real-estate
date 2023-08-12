// import React from 'react'
import Card from "./Card";

export default function Main() {
    return (
        <div>

            {/* ---------------------------------  filters--------------------------- */}
            
            <div className="flex flex-col px-6 md:px-20 my-8 mx-3 sm:mx-32 md:my-20 border p-4 bg-gray-300 rounded-xl">
                <div className="mb-4 md:flex md:space-x-4">
                    <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                        <select className="w-full p-2.5 pt-4 pb-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Location</option>
                            <option>Pune</option>
                            <option>San Francisco</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Banglore</option>
                        </select>
                    </div>
                    <div className="relative w-full md:w-1/2 md:w-1/2">
                        <select className="w-full p-2.5 pt-4 pb-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>BHK</option>
                            <option>Pune</option>
                            <option>San Francisco</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Banglore</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 md:flex md:space-x-4">
                    <div className="relative w-full mb-4 md:mb-0">
                        <select className="w-full p-2.5 py-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option> Price</option>
                            <option>Pune</option>
                            <option>San Francisco</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Banglore</option>
                        </select>
                    </div>
                    <div className=" relative w-full mb-4 md:mb-0 ">
                        <select className="w-full p-2.5 py-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Property Type</option>
                            <option>Pune</option>
                            <option>San Francisco</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Banglore</option>
                        </select>
                    </div>
                </div>
                <button className="p-3 bg-blue-600 text-white font-bold tracking-widest rounded-lg hover:bg-blue-800 font-sans">Search</button>
            </div>

            {/* max-w-[1075px] */}
            {/* display section  */}
            <section className="h-full my-20  p-10 bg-pink-100 mx-3 sm:mx-32  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 rounded-xl">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />


            </section>

        </div>
    )
}

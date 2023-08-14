// import React from 'react'
import { ArrowUpRight } from 'lucide-react'
// import {price,bhk , area ,}

// eslint-disable-next-line react/prop-types
export default function Card({location , description , area , price , bhk , pincode , contact , amenities , imageUrl }) {
  return (
    <div className="w-[300px] bg-white rounded-md border">
      <img
        // src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        src={imageUrl}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {location} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {description}
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Amenities : {amenities}
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Area : {area}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {price}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {bhk}:BHK
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            pincode:{pincode}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 h-10 w-full rounded-sm bg-blue-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Contact Agent: {contact}
        </button>
      </div>
    </div>
  )
}

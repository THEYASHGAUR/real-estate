// import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Landing_page = () => {
  return (
    <>
      <div className=" bg-landing_page h-110  bg-red-500 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-black">Agents. Tours. Loans. Homes.</p>
        {/* serach bar */}
        <div className='w-96 relative mt-10 sm:w-110 sm:mx-3'>
          <input
            className='w-full md:h-20 h-14 text-2xl p-3 pr-28 sm:mx-3 border-spacing-1 space-x-2  overflow-hidden'
            type="text"
            placeholder="Enter a address , pincode or location"
          />

          <SearchIcon className=' absolute -ml-10 mt-8 cursor-pointer font-bold text-4xl bg-white ' />

        </div>

      </div >
    </>
  )
}

export default Landing_page;

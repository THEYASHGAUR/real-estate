// import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Landing_page = () => {
  return (
    <div className="h-110 bg-red-500 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-white">Agents. Tours. Loans. Homes.</p>
        <input 
        className="pt-7 pb-7 pl-5 pr-52 text-2xl rounded-lg mt-5"
        type="text"
        placeholder="Enter a address , pincode or location" />
        <button>
                <SearchIcon className='font-bold text-3xl'/>
        </button>
      
    </div>
  )
}

export default Landing_page;

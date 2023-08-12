// // import React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Header = () => {
//     return (
//         <div className="bg-white  border-b-4 h-auto md:h-28">
//             <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
//                 <div className="logo">
//                     <p className="text-blue-500 font-extrabold text-2xl md:text-4xl">Estate Ease</p>
//                 </div>
//                 {/* menu */}
//                 <nav className="mt-4 md:mt-0">
//                     <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
//                         <button className="text-base md:text-xl font-sans">Buy</button>
//                         <button className="text-base md:text-xl font-sans">Sell</button>
//                         <button className="text-base md:text-xl font-sans">Rent</button>
//                         <button className="text-base md:text-xl font-sans">Agent Finder</button>
//                     </ul>
//                 </nav>

//                 <div className='hidden'>
//                     <MenuIcon />
//                 </div>
//                 <div className='hidden'>
//                     <CloseIcon />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;


import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white border-b-4 ">
            <div className=" lg:px-20 p-4  flex flex-row md:flex   items-center justify-between md:p-6  sm:flex ">
                <div className="logo">
                    <p className="text-blue-500 font-extrabold text-2xl md:text-4xl">Estate Ease</p>
                </div>

                <div className='md:flex-col'>
                    {/* Menu icon for mobile */}
                    <div className="md:hidden">
                        {isMenuOpen ? (
                            <CloseIcon onClick={toggleMenu} className="text-xl cursor-pointer" />
                        ) : (
                            <MenuIcon onClick={toggleMenu} className="text-xl cursor-pointer" />
                        )}
                    </div>

                    {/* Menu for tablet and desktop */}
                    <nav className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                        <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                            <button className="text-base md:text-xl font-sans">Buy</button>
                            <button className="text-base md:text-xl font-sans">Sell</button>
                            <button className="text-base md:text-xl font-sans">Rent</button>
                            <button className="text-base md:text-xl font-sans">Agent Finder</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;

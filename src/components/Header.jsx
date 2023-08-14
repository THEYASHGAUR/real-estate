
// import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <>

            {/* <div className="bg-white border-b-4 "> */}
                {/* <div className=" lg:px-20 p-4  flex flex-row md:flex   items-center justify-between md:p-6  sm:flex "> */}
                    {/* <div className="logo">
                        <p className="text-blue-500 font-extrabold text-2xl md:text-4xl">Estate Ease</p>
                    </div> */}

                    {/* <div className='md:flex-col'>
                        {/* Menu icon for mobile */}
                    {/* <div className="md:hidden">
                            {isMenuOpen ? (
                                <CloseIcon onClick={toggleMenu} className="text-xl cursor-pointer" />
                            ) : (
                                <MenuIcon onClick={toggleMenu} className="text-xl cursor-pointer" />
                            )}
                        </div> */}

                    {/* Menu for tablet and desktop */}
                    {/* <nav className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                            <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                                <button className="text-base md:text-xl font-sans">Buy</button>
                                <button className="text-base md:text-xl font-sans">Sell</button>
                                <button className="text-base md:text-xl font-sans">Rent</button>
                                <button className="text-base md:text-xl font-sans">Agent Finder</button>
                            </ul>
                        </nav> */}
                {/* </div> */}
            {/* </div> */}
        


            <nav className="bg-white border-gray-200 dark:bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10 py-10 p-4">
                    <a href="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="self-center  font-semibold whitespace-nowrap text-blue-500 text-4xl">Estate Ease</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg> */}
                        <MenuIcon />
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-white dark:border-white">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 dark:text-black md:dark:text-black text-xl" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Buy</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Sell</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-black md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Header;

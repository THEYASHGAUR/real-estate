// import React from 'react'

const Header = () => {
    return (
        <div className="bg-white flex items-center border-b-4 justify-around h-28">
            <div className="logo">
                <p className="text-blue-500 font-extrabold text-4xl ">Estate Ease</p>
            </div>
            {/* menu */}
            <nav>
                <ul className="flex items-center justify-center gap-5">
                    <button className="text-xl font-sans m-4">Buy</button>
                    <button className="text-xl font-sans m-4">Sell</button>
                    <button className="text-xl font-sans m-4">Rent</button>
                    <button className="text-xl font-sans m-4">Agent Finder</button>
                </ul>
            </nav>
        </div>
    )
}

export default Header;


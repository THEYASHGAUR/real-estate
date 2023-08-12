import { useState } from "react";
import Card from "./Card";
import propertyData from "../assets/PropertyData";




export default function Main() {

    const [filteredData, setFilteredData] = useState(propertyData);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedBHK, setSelectedBHK] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedArea, setSelectedArea] = useState("");

    const applyFilters = () => {
        console.log("serach")
        let newData = propertyData;

        if (selectedLocation) {
            newData = newData.filter(property => property.location === selectedLocation);
        }

        if (selectedBHK) {
            newData = newData.filter(property => property.bhk === parseInt(selectedBHK));
        }

        setFilteredData(newData);
    };


    return (
        <div>

            {/* ---------------------------------  filters--------------------------- */}

            <div className="flex flex-col px-6 md:px-20 my-8 mx-3 sm:mx-32 md:my-20 border p-4 bg-gray-300 rounded-xl">
                <div className="mb-4 md:flex md:space-x-4">
                    <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                        <select
                            className="w-full p-2.5 pt-4 pb-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            value={selectedLocation}
                        >
                            <option value="">Location</option>
                            <option>Downtown Area</option>
                            <option>San Francisco</option>
                            <option>Suburbia Heights</option>
                            <option>Central Park Area</option>
                            <option>Hillside Heights</option>
                            <option>Riverside Residences</option>
                        </select>
                    </div>
                    <div className="relative w-full  md:w-1/2">
                        <select
                            className="w-full p-2.5 pt-4 pb-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={(e) => setSelectedBHK(e.target.value)}
                            value={selectedBHK}
                        >
                            <option value="">BHK</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 md:flex md:space-x-4">
                    <div className="relative w-full mb-4 md:mb-0">
                        <select
                            className="w-full p-2.5 py-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={(e) => setSelectedPrice(e.target.value)}
                            value={selectedPrice}
                        >
                            <option value=""> Price</option>
                            <option>$1000+</option>
                            <option>$2000</option>
                            <option>$3000+</option>
                            <option>$4000+</option>
                            <option>$5000+</option>
                        </select>
                    </div>
                    <div className=" relative w-full mb-4 md:mb-0 ">
                        <select
                            className="w-full p-2.5 py-4 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={(e) => setSelectedArea(e.target.value)}
                            value={selectedArea}
                        >
                            <option value="">Area(in sqft)</option>
                            <option>Pune</option>
                            <option>San Francisco</option>
                            <option>New Delhi</option>
                            <option>Mumbai</option>
                            <option>Banglore</option>
                        </select>
                    </div>
                </div>
                <button
                    className="p-3 bg-blue-600 text-white font-bold tracking-widest rounded-lg hover:bg-blue-800 font-sans"
                    onClick={applyFilters}
                >Search</button>
            </div>

            {/* properties display section  */}
            <h1 className="underline font-bold ml-20 text-4xl">List of Houses in Rent</h1>
            <section className="h-full my-20  p-5 bg-pink-100 mx-3 sm:mx-40 sm:items-center md:mx-5  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 rounded-xl">
                {filteredData.map((val) => {
                    return (
                        <>
                            <Card
                                key={val.id}
                                imageUrl={val.imageUrl}
                                price={val.price}
                                bhk={val.bhk}
                                location={val.location}
                                description={val.description}
                                contact={val.contact}
                                area={val.area}
                                pincode={val.pincode}
                                amenities={val.amenities}
                            />
                        </>
                    )
                })}
            </section>

        </div>
    )
}

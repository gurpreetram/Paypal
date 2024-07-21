import React from "react";
import imgUrl from "../assets/logo1.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    return (
        <>
            <div className="grid grid-cols-4 gap-4 text-center p-2 bg-white">
                <div>
                    <img src={imgUrl} alt="image" className="w-2/5 m-auto" />
                </div>
                <div className="col-span-2 flex justify-center uppercase ">
                 <a href="" className="flex mr-5">individual <IoIosArrowDown /></a> 
                 <a href="" className="flex mr-5" >business <IoIosArrowDown /></a>
                 <a href="" className="flex mr-5" > partners <IoIosArrowDown /> </a>
                 <a href="" className="flex mr-5">useful info <IoIosArrowDown /> </a>
                </div>
                <div>
                    <button className="mr-5 bg-transparent text-blue-500 border-blue-500 border p-2 px-4 text-xs font-medium rounded-3xl">Login In</button>
                    <button className="p-2 px-4 text-xs text-white font-medium rounded-3xl bg-blue-600">Sign up</button>
                </div>
            </div>
        </>
    )
};

export default Navbar;
import React from "react";
import Video from "../assets/video1.mp4"
const HeroSection = () => {
    return (
        <>
            <div>
                <div style={{ width: "100%",  }}>
                    <video src={Video} autoPlay muted className="h-full w-full object-fill  " />
                    <div className="text-center bg-[#02387b] w-full h-28 ">
                        <p className=" md:text-xl text-2xl text-white pt-3 ">Looking for PayPal Business Solutions? Whether you are freelancer or a business, we are here to support you.</p>
                        <button className="text-black font-semibold p-2 px-5 mt-3  text-sm  rounded-3xl bg-white">Paypal for business</button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default HeroSection;
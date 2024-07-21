import React from "react";
import Payment1 from "../assets/payment1.png";
import Payment2 from "../assets/payment2.png";
import Payment3 from "../assets/payment3.png";
import Brand1  from "../assets/brand1.png";
import Brand2  from "../assets/brand2.png";
import Brand3  from "../assets/brand3.png";
const PaymentMethod = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-2  bg-[#f5f7fa] w-full h-96 py-auto">
                <div className="p-28">
                    <h2 className="text-[#00A8EA] font-semibold text-4xl" >The world is your shopping mall</h2>
                    <p className="mt-4">From big brands to little boutiques, you can shop safely at millions of online stores with PayPal.
                    </p>
                    <button className="text-blue-900 font-bold text-sm bg-transparent border-blue-300 border rounded-3xl py-3 w-72 mt-4">Shop Now</button>
                </div>
                <div className="w-full h-full">
                   <img className="w-full h-80 object-contain" src={Payment1} alt="" />
                </div>
            </div>
            {/* // payment 2 */}

            <div className="grid grid-cols-2 gap-2  bg-white w-full h-96 py-auto">
              
                <div className="w-full h-full">
                   <img className="w-full h-80 object-contain p-5" src={Payment2} alt="" />
                </div>
                <div className="p-28">
                    <h2 className="text-[#00A8EA] font-semibold text-4xl" >Pay it the way you want</h2>
                    <p className="mt-4"> Link all your credit and debit cards and choose which one to use at checkout. Shopping online has never been this easy.
                    </p>
                    <button className="text-blue-900 font-semibold text-sm bg-transparent border-blue-300 border rounded-3xl py-3 w-72 mt-4">Link Your preferred card </button>
                </div>
            </div>

            {/* // payment 3 */}


            <div className="grid grid-cols-2 gap-2  bg-[#f5f7fa] w-full h-96 py-auto">
                <div className="p-28">
                    <h2 className="text-[#00A8EA] font-semibold text-4xl" >Pay it safe</h2>
                    <p className="mt-4">Protect your purchases with PayPal. If you don’t receive your order, or it shows up different than described, 
                        PayPal Buyer Protection will help you get reimbursed for eligible items. <span className="text-blue-700 font-bold"> Terms and limitations apply.</span>
                    </p>
                    <button className="text-blue-900 font-bold text-sm bg-transparent border-blue-300 border rounded-3xl py-3 w-72 mt-4">Find Out More</button>
                </div>
                <div className="w-full h-full">
                   <img className="w-full h-80 object-contain" src={Payment3} alt="" />
                </div>
            </div>

                    {/* Checkout Brands */}
                    
                   <div className="text-center w-full h-48   ">
                   <div>
                        <p className="text-[#00A8EA] font-semibold text-4xl mt-12">Checkout at millions of brands you love</p>
                        </div>
                        <div className="flex justify-center items-center">
                        <img src={Brand1} className="w-24 object-contain mr-4" alt="image" />
                        <img src={Brand2} className="w-28 mr-4" alt="image" />
                        <img src={Brand3} className="w-28" alt="image" />
                        </div>
                   </div>
                 

        </>
    )
};

export default PaymentMethod;
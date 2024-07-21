import React from "react";

const FooterNav = () =>{
    return(
        <>
        <div className="w-3/4 mt-8 m-auto mb-10">
            <div className="flex justify-between">
                        <ul className="flex mb-3">
                            <li className="mr-3 font-semibold">Help</li>
                            <li className="mr-3 font-semibold ">Contact</li>
                            <li className="mr-3 font-semibold ">Fees</li>
                            <li className="mr-3 font-semibold ">Security</li>
                            <li className="mr-3 font-semibold ">Shop</li>
                        </ul>
                  <p>india</p>
            </div>
            <hr  />
            <div className="flex justify-between">
                        <ul className="flex mt-5">
                            <li className="mr-3 font-semibold text-gray-600">About</li>
                            <li className="mr-3 font-semibold text-gray-600">Newsroom</li>
                            <li className="mr-3 font-semibold text-gray-600">Jobs</li>
                            <li className="mr-3 font-semibold text-gray-600">Developers</li>
                            <li className="mr-3 font-semibold text-gray-600">Partners</li>
                        </ul>
                       <div>
                       <ul className="flex mt-5">
                            <li className="mr-3 font-semibold text-gray-600">© 1999 -2024</li>
                            <li className="mr-3 font-semibold text-gray-600">Accessibility</li>
                            <li className="mr-3 font-semibold text-gray-600">Cookies</li>
                            <li className="mr-3 font-semibold text-gray-600">Privacy</li>
                            <li className="mr-3 font-semibold text-gray-600">CSR</li>
                            <li className="mr-3 font-semibold text-gray-600">Annual Return</li>
                            <li className="mr-3 font-semibold text-gray-600">Legal</li>
                        </ul>
                       </div>
            </div>
            <p className="text-sm mt-3 mb-6">PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the <span className="text-blue-900 font-semibold">terms and conditions</span> carefully.
            </p>
            <p className="text-sm">When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more <span className="text-blue-900 font-semibold">here</span>.</p>
        </div>
        </>
    )
};

export default FooterNav;
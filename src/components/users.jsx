import React, { useEffect, useState } from "react";

const Users = () => {

    const Data =["3" ,"4","5" ,"6"]
const [userCount , setUserCount] = useState(0);
const [Count , setCount] = useState(userCount);

// useEffect(() =>{
//     setTimeout(() =>{
//         setUserCount( userCount => userCount + 1)
//     },2000)
//     if (userCount.length === 2) {
//         setCount(userCount.charAt(1));
//         setUserCount(userCount.charAt(0))
//     }
// },[])

    return (
        <>
            <div className="bg-[#00a8ea] w-full h-96 text-center">
                <div className="w-3/4 m-auto p-12">
                    <div>
                        <p className="text-white font-semibold text-4xl mb-5">
                            Join the global community of PayPal users who are shopping and receiving payments securely every day.</p>
                    </div>
                    <div>
                        <button className="text-blue-900 font-bold text-sm bg-white border-blue-300 border rounded-3xl py-3 w-72 mt-4">Sign Up Now</button>
                    </div>
                    <div className="mt-8">
                            <div className="flex justify-center">
                            {
                                Data.map((itmes) =>{
                                    return(
                                        <>
                                         <p className="bg-white rounded-xl text-3xl w-14 h-12 pt-1 mr-3 mt-5 "> {itmes} </p> 
                                        </>
                                    )
                                })
                            }
                             <p className="bg-white rounded-xl text-3xl w-14 h-12 pt-1 mr-3 mt-5 "> {userCount} </p>
                             <p className="bg-white rounded-xl text-3xl w-14 h-12 pt-1 mr-3 mt-5 "> {Count} </p> 
                            </div>
                    </div>
                  
                </div>
            </div>
        </>
    )
};

export default Users;

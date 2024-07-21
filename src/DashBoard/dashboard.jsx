import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import PaymentMethod from "../components/paymentmethod";
import Users from "../components/users";
import Footer from "../components/footer";
import FooterNav from "../components/footernav";

const Dashboard =() =>{
    return(
        <>
        <Navbar />
        <HeroSection />
        <PaymentMethod />
        <Users />
        <Footer />
        <FooterNav />
        </>
    )
};

export default Dashboard;
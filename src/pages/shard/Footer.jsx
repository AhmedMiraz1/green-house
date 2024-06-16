import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-72">

            <div className="flex ">
                <div className="bg-[#1F2937] text-white w-full text-center py-12 space-y-6">
                    <div className="flex flex-col">
                    <h1 className="uppercase text-xl md:text-2xl lg:text-3xl">Green House</h1>
                    
                   <a href="">Home</a>
                   <a href="">Apartment</a>
                    <a href="">Mon - Fri: 08:00 - 22:00</a>
                    <a href="">Sat - Sun: 10:00 - 23:00</a>
                    </div>

                </div>
                <div className="bg-[#111827] text-white w-full text-center space-y-4 py-12">
                    <h1 className="uppercase text-xl md:text-2xl font-bold">Follow US</h1>
                    <a href="">Join us on social media</a>
                    <div className="flex gap-6 justify-center text-blue-500"><span><FaFacebook/></span><span><FaInstagram className="text-pink-500"/></span><span><FaTwitter/></span></div>

                </div>
            </div>
            <div className="bg-[#151515] w-full">
                <p className="text-white text-center py-5">Copyright © GreenHouse. All rights reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;
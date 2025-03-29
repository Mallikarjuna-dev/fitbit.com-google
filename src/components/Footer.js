import React from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { GiIndiaGate } from "react-icons/gi";
import { FaInstagram, FaSquareFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-white text-gray-700 py-10 px-6 md:px-16 mt-8 md:mt-28">
            <div className="flex flex-col md:flex-row justify-between mx-auto max-w-6xl pb-10 text-sm font-medium">
                <div className="flex flex-col space-y-4 md:space-y-6 mb-6 md:mb-0">
                    <p>Country availability</p>
                    <p>Disability Support</p>
                    <p>Repairs</p>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-6">
                    <p>Help Centre</p>
                    <p>Contact Us</p>
                    <p>Fitbit Support</p>
                    <p>Device recycling</p>
                </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium text-center py-4 max-w-6xl mx-auto">
                <div className="flex text-lg space-x-4 mb-4 md:mb-0">
                    <RiTwitterXFill />
                    <FaInstagram />
                    <FaSquareFacebook />
                    <FaYoutube />
                    <FaTiktok />
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8">
                    <span className="flex items-center space-x-1">
                        <GiIndiaGate className="text-xl" />
                        <p>India</p>
                    </span>
                    <p>Privacy</p>
                    <p>Google Nest Commitment to Privacy</p>
                    <p>Sales Terms</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { MdSearch, MdShoppingCart, MdMenu, MdClose } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white px-6 md:px-36 sticky top-0 right-0 left-0 shadow-md">
            <div className="flex items-center justify-between py-4">
                {/* Left Section */}
                <div className="flex items-center">
                    <Link href="/" className="text-gray-800 text-3xl mr-4">
                        <FcGoogle />
                    </Link>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/products" className="text-gray-800 hover:text-blue-600">Phones</Link>
                        <Link href="/about" className="text-gray-800 hover:text-blue-600">Earbuds</Link>
                        <Link href="/watches" className="text-gray-800 hover:text-blue-600">Watches & Trackers</Link>
                        <Link href="/accessories" className="text-gray-800 hover:text-blue-600">Accessories</Link>
                        <Link href="/support" className="text-gray-800 hover:text-blue-600">Support</Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-gray-800 text-2xl"><MdSearch /></Link>
                    <Link href="/cart" className="text-gray-800 text-2xl"><MdShoppingCart /></Link>
                    <Link href="/profile" className="text-gray-800 text-lg hidden md:block">Profile</Link>
                    {/* Hamburger Menu Icon */}
                    <button className="md:hidden text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4 bg-gray-100 text-center">
                    <Link href="/products" className="text-gray-800 hover:text-blue-600">Phones</Link>
                    <Link href="/about" className="text-gray-800 hover:text-blue-600">Earbuds</Link>
                    <Link href="/watches" className="text-gray-800 hover:text-blue-600">Watches & Trackers</Link>
                    <Link href="/accessories" className="text-gray-800 hover:text-blue-600">Accessories</Link>
                    <Link href="/support" className="text-gray-800 hover:text-blue-600">Support</Link>
                    <Link href="/profile" className="text-gray-800 hover:text-blue-600">Profile</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

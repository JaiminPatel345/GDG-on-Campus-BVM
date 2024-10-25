import React from "react"
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"

const Contact = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-8">
                <div className="my-10">
                    <h2 className="text-center text-xl font-bold mb-4">
                        Contact Us
                    </h2>

                    <div className="h-8 w-screen bg-transparent"></div>

                    {/* Social Media Links */}
                    <div className="wrapper flex justify-center space-x-6">
                        {/* LinkedIn */}
                        <div className="button group flex items-center space-x-4">
                            <div className="icon bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#0077b5]">
                                <FaLinkedinIn className="text-2xl text-black group-hover:text-white" />
                            </div>
                            <span className="text-lg font-medium text-[#0077b5] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                LinkedIn
                            </span>
                        </div>

                        {/* Discord */}
                        <div className="button group flex items-center space-x-4">
                            <div className="icon bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#5865F2]">
                                <BsDiscord className="text-2xl text-black group-hover:text-white" />
                            </div>
                            <span className="text-lg font-medium text-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Discord
                            </span>
                        </div>

                        {/* Instagram */}
                        <div className="button group flex items-center space-x-4">
                            <div className="icon bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#e1306c]">
                                <FaInstagram className="text-2xl text-black group-hover:text-white" />
                            </div>
                            <span className="text-lg font-medium text-[#e1306c] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Instagram
                            </span>
                        </div>

                        {/* Twitter */}
                        <div className="button group flex items-center space-x-4">
                            <div className="icon bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-500 ease-out group-hover:bg-[#1da1f2]">
                                <FaTwitter className="text-2xl text-black group-hover:text-white" />
                            </div>
                            <span className="text-lg font-medium text-[#1da1f2] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Twitter
                            </span>
                        </div>
                    </div>

                    <div className="h-32 w-screen bg-transparent"></div>
                    <div className="flex justify-center">
                        <iframe
                            title="BVM Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7104044198213!2d72.92163631537082!3d22.552518539390064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1599647332764!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            aria-hidden="false"
                            loading="lazy"
                            className="border-0"
                        />
                    </div>
                </div>
                <div className="h-32 w-screen bg-transparent"></div>
                <div className="container mx-auto flex justify-center gap-24 items-start">
                    {/* Left Section - Logo and About */}
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <img
                                src="/logo.png"
                                alt="GDGC Logo"
                                className="w-12 h-12 mr-3"
                            />
                            <span className="font-bold text-xl">
                                Google Developer Groups
                            </span>
                        </div>
                        <div className="text-gray-400">
                            <h4 className="font-semibold mb-2">About</h4>
                            <p>
                                Helping students bridge the gap between theory
                                and practice.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="hover:underline">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold mb-4">
                            Have a Questions?
                        </h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                <span className="inline-block mr-2">📍</span>
                                Birla Vishvakarma Mahavidyalaya, Vidyanagar,
                                Anand.
                            </li>
                            <li>
                                <span className="inline-block mr-2">📧</span>
                                <a href="mailto:developerstudentclubs.bvm@gmail.com">
                                    developerstudentclubs.bvm@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 mt-8">
                    <p>
                        Copyright © 2024 All rights reserved | This template is
                        made by GDG on campus BVM
                    </p>
                </div>
                <div className="h-12 w-screen bg-transparent"></div>
            </footer>
        </>
    )
}

export default Contact

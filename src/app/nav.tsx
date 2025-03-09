'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCogs, FaProjectDiagram, FaServicestack, FaPhone } from "react-icons/fa";
import Image from "next/image";
import HAlogo from "../public/Images/HAlogo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <div className="fixed z-20 bg-white w-full flex justify-between items-center md:h-14 p-6 shadow-2xl">
        {/* Logo */}
        <Image src={HAlogo} alt="logo" width={40} height={120} className="ml-10" />

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden mr-10">
          {!isOpen ?(
          <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />      
        ):(
          <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer text-[#091057] hover:text-red-400 transition-all duration-300" />
        )}
          </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center mr-10">
          <ul className="flex flex-col lg:gap-24 md:flex-row justify-center md:gap-12 gap-4">
            <Link href="#Screen"><li className="hover:text-[#97a4a8] cursor-pointer">Home</li></Link>
            <Link href="#About"><li className="hover:text-[#97a4a8] cursor-pointer">About</li></Link>
            <Link href="#Skills"><li className="hover:text-[#97a4a8] cursor-pointer">Skills</li></Link>
            <Link href="#Project"><li className="hover:text-[#97a4a8] cursor-pointer">Project</li></Link>
            <Link href="#Service"><li className="hover:text-[#97a4a8] cursor-pointer">Service</li></Link>
            <Link href="#Contact"><li className="hover:text-[#97a4a8] cursor-pointer">Contact</li></Link>
          </ul>
        </nav>
      </div>

{/* Sidebar Navigation (Mobile Only) */}
<div className={`fixed top-0 left-0 h-full w-64 bg-[#ffffff40] backdrop-blur-md z-50 text-white transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} shadow-2xl md:hidden border-r border-gray-400`}>
  {/* Close Button */}
  <div className="flex justify-between items-center px-6  py-6 bg-white">
    <Image src={HAlogo} alt="logo" width={40} height={40} className="rounded-full" />
  </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 mt-10 px-6">
          <Link href="#Screen">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8] hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaHome className="text-xl text-[#091057]" />
              Home
            </li>
          </Link>
          <Link href="#About">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8]  hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaUser className="text-xl  text-[#091057]" />
              About
            </li>
          </Link>
          <Link href="#Skills">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8] hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaCogs className="text-xl  text-[#091057]" />
              Skills
            </li>
          </Link>
          <Link href="#Project">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8] hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaProjectDiagram className="text-xl  text-[#091057]" />
              Project
            </li>
          </Link>
          <Link href="#Service">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8] hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaServicestack className="text-xl  text-[#091057]" />
              Service
            </li>
          </Link>
          <Link href="#Contact">
            <li className="flex items-center gap-4 p-3 rounded-md text-[#97a4a8] hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <FaPhone className="text-xl  text-[#091057]" />
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

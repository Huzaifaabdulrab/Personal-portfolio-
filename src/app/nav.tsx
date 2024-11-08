'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import HAlogo from "../public/Images/HAlogo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle `isOpen` state
  };

  return (
    <>
      <div className="fixed  bg-white  w-full flex justify-between items-center md:h-14 p-6  shadow-2xl">
        {/* Logo */}
        <Image src={HAlogo} alt="logo" width={40} height={120} className="ml-10" />

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden mr-10">
          <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer " />
        </div>

        {/* Navigation menu for PC */}
        <nav className="hidden md:flex items-center mr-10">
          <ul className="flex flex-col lg:gap-24 md:flex-row justify-center md:gap-12 gap-4">
         <Link href="#Screen">   <li className="hover:text-[#97a4a8] cursor-pointer">Home</li></Link>
         <Link href="#About">   <li className="hover:text-[#97a4a8] cursor-pointer">About</li></Link>
         <Link href="#Skills">   <li className="hover:text-[#97a4a8] cursor-pointer">Skills</li></Link>
         <Link href="#Project">   <li className="hover:text-[#97a4a8] cursor-pointer">Project</li></Link>
         <Link href="#Service">   <li className="hover:text-[#97a4a8] cursor-pointer">Service</li></Link>
         <Link href="#Contact">   <li className="hover:text-[#97a4a8] cursor-pointer">Contact</li></Link>
           
           </ul>
        </nav>

        {/* Mobile Navigation dropdown menu */}
        <div 
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-[5rem] right-6 w-24 h-72   bg-[#091057]  text-white transition-all duration-300 ease-in-out md:hidde`}
        >
         <ul className="flex flex-col justify-center items-center h-full gap-4 shadow-custom-visible p-4 bg-[#091057] rounded-lg">
         <Link href="#Screen">   <li className="hover:text-[#97a4a8] cursor-pointer">Home</li></Link>
         <Link href="#About">   <li className="hover:text-[#97a4a8] cursor-pointer">About</li></Link>
         <Link href="#Skills">   <li className="hover:text-[#97a4a8] cursor-pointer">Skills</li></Link>
         <Link href="#Project">   <li className="hover:text-[#97a4a8] cursor-pointer">Project</li></Link>
         <Link href="#Service">   <li className="hover:text-[#97a4a8] cursor-pointer">Service</li></Link>
         <Link href="#Contact">   <li className="hover:text-[#97a4a8] cursor-pointer">Contact</li></Link>
</ul>
 </div>
      </div>
    </>
  );
}

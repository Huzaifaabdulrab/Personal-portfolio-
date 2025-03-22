'use client'
import { FaHtml5, FaCss3, FaJs, FaGithub, FaFigma, FaReact } from "react-icons/fa";
import { SiSanity } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoLogoSass } from "react-icons/io";

export default function SkillsArea() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className='text-orange-600' size={50} /> },
    { name: "CSS", icon: <FaCss3 className='text-blue-600' size={50} /> },
    { name: "JavaScript", icon: <FaJs className='text-yellow-500' size={50} /> },
    { name: "TypeScript", icon: <BiLogoTypescript className='text-blue-400' size={50} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-teal-400' size={50} /> },
    { name: "Next.js", icon: <RiNextjsFill className='text-black' size={50} /> },
    { name: "React", icon: <FaReact className='text-blue-400' size={50} /> },
    { name: "Sanity", icon: <SiSanity className='text-red-500' size={50} /> },
    { name: "GitHub", icon: <FaGithub className='text-gray-700' size={50} /> },
    { name: "UI & UX", icon: <FaFigma className='text-purple-500' size={50} /> },
    { name: "Scss", icon: <IoLogoSass className='text-[#b37399aa]' size={50} /> },
    
  ];

  return (
    <>
<div id="Skills" className="flex flex-col items-center  w-full pb-20 mt-24 text-center">
      <h1 className="text-[#091057] font-bold text-4xl pt-10 mt-14">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-10 mt-16 px-5">
        {skills.map(({ name, icon }, index) => (
      <div 
      key={index} 
      data-aos="fade-right"
      className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl transition-transform duration-300 hover:-translate-y-2" 
    >
      {icon}
      <p className="mt-2 text-lg font-semibold text-[#091057]">{name}</p>
    </div>
      ))}
      </div>
    </div>
    </>);
}
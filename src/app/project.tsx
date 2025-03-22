'use client'
import { FaArrowAltCircleDown } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; 
import WebDevelop from "../public/Images/Web-development.jpg";
import Hackhathon from "../public/Images/hackhathon.png";
import Cli from "../public/Images/Cli.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
  }, []);

  const projectList = [
    {
      id: 1,
      image: WebDevelop,
      name: "Web Development",
      description:
        "A collection of my web development projects using HTML, CSS, JavaScript, and TypeScript.",
      url: "/WebProject",
      animation: "fade-up",
    },
    {
      id: 2,
      image: Hackhathon,
      name: "Hackathon Projects",
      description:
        "Modern UI designs converted into responsive websites using Tailwind CSS, HTML, and Next.js.",
      url: "/hackhathon",
      animation: "fade-left",
    },
    {
      id: 3,
      image: Cli,
      name: "CLI Tools",
      description:
        "A suite of command-line tools developed in TypeScript for improving productivity.",
      url: "/CLI",
      animation: "fade-right",
    },
  ];

  return (
    <div id="Project" className="py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#091057]" data-aos="zoom-in">
          My Projects
        </h1>
        <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up">
          Explore my latest work in web development, UI/UX, and CLI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {projectList.map((list) => (
          <div
            key={list.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 "
            data-aos={list.animation}
          >
            <Image
              src={list.image}
              alt={list.name}
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-[#091057]">
                {list.name}
              </h2>
              <p className="text-gray-500 text-base mt-2">
                {list.description}
              </p>
              <Link href={list.url}>
                <button className="mt-4 px-6 py-2 bg-[#091057] text-white rounded-full hover:bg-[#0a0f87] transition-all duration-300">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
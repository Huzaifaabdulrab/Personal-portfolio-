"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpotlightCard from "./SpotlightCard";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const services = [
    {
      title: "HTML Development",
      description:
        "Crafting structured and semantic web pages using HTML, ensuring accessibility, SEO optimization, and seamless integration with modern technologies for better user experience.",
      icon: <FaHtml5 className="text-[#091057] text-5xl mb-4" />,
      animation: "fade-up",
    },
    {
      title: "CSS3 & Frameworks",
      description:
        "Designing responsive and visually appealing layouts using Tailwind CSS and Bootstrap, ensuring efficiency, modern UI, and seamless integration with web technologies.",
      icon: <FaCss3 className="text-[#091057] text-5xl mb-4" />,
      animation: "fade-down",
    },
    {
      title: "JavaScript Development",
      description:
        "Developing interactive web applications with JavaScript to enhance user engagement, ensuring smooth functionality and dynamic user interfaces for better UX.",
      icon: <FaJs className="text-[#091057] text-5xl mb-4" />,
      animation: "fade-left",
    },
    {
      title: "TypeScript Development",
      description:
        "Building scalable and maintainable applications using TypeScript, ensuring type safety, improved debugging, and better performance for modern web apps.",
      icon: <BiLogoTypescript className="text-[#091057] text-5xl mb-4" />,
      animation: "fade-right",
    },
    {
      title: "Next.js Development",
      description:
        "Creating high-performance applications with Next.js, utilizing server-side rendering and static generation to optimize speed, SEO, and user experience.",
      icon: <RiNextjsFill className="text-[#091057] text-5xl mb-4" />,
      animation: "zoom-in",
    },
    {
      title: "React.js Development",
      description:
        "Developing modern applications with React.js, leveraging component-based architecture to build reusable UI elements for efficient and scalable solutions.",
      icon: <FaReact className="text-[#091057] text-5xl mb-4" />,
      animation: "zoom-out",
    },
  ];

  return (
    <div className="overflow-hidden px-4 md:px-10 lg:px-20">
      <h1 id="Service" className="text-[#091057] font-bold text-4xl text-center pt-10 mt-14">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {services.map((service, index) => (
          <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="#091057">
            <div className="shadow-xl rounded-lg p-6 flex flex-col items-center text-center min-h-[320px] " data-aos={service.animation}>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#091057] lg:w-[70%] w-[100%]">
                {service.title}
              </h3>
              <p className="mt-4 text-[#353333] font-medium text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}

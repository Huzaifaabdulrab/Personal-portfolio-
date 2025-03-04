'use client'
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animation will only happen once
      mirror: false, // Animation will not replay when scrolling up
    });
  }, []);

  const services = [
    {
      title: "HTML Development",
      description:
        "Crafting structured and semantic web pages using HTML, ensuring accessibility, SEO optimization, and seamless integration with modern web technologies.",
      icon: <FaHtml5 className="text-[#091057] text-4xl mb-4" />,
      animation: "fade-up",
    },
    {
      title: "CSS Frameworks",
      description:
        "Leveraging frameworks like Tailwind CSS and Bootstrap to create beautiful, responsive layouts with minimal effort.",
      icon: <FaCss3 className="text-[#091057] text-4xl mb-4" />,
      animation: "fade-down",
    },
    {
      title: "JavaScript Development",
      description:
        "Developing dynamic web applications using JavaScript, enhancing interactivity and user engagement.",
      icon: <FaJs className="text-[#091057] text-4xl mb-4" />,
      animation: "fade-left",
    },
    {
      title: "TypeScript Development",
      description:
        "Building robust applications with TypeScript for enhanced code quality and maintainability.",
      icon: <BiLogoTypescript className="text-[#091057] text-4xl mb-4" />,
      animation: "fade-right",
    },
    {
      title: "Next.js Development",
      description:
        "Creating high-performance web applications with Next.js, focusing on server-side rendering and static site generation.",
      icon: <RiNextjsFill className="text-[#091057] text-4xl mb-4" />,
      animation: "zoom-in",
    },
    {
      title: "React.js Development",
      description:
        "Building modern web applications using React.js, leveraging component-based architecture and reusable UI components for seamless user experiences.",
      icon: <FaReact className="text-[#091057] text-4xl mb-4" />,
      animation: "zoom-out",
    },
  ];

  return (
    <div className="overflow-hidden">
      <h1
        id="Service"
        className="text-[#091057] font-bold text-4xl text-center pt-10 mt-14"
      >
        Our Service
      </h1>
      <div className="flex flex-wrap py-10 px-20 justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#e8e6e6] shadow-xl border border-gray-300 rounded-lg p-6 lg:w-80 flex flex-col items-center text-center"
            data-aos={service.animation}
          >
            <div className="text-[#091057] mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#8b8585] lg:w-[70%] w-[100%]">
              {service.title}
            </h3>
            <p className="mt-4 text-[#353333] font-semibold">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

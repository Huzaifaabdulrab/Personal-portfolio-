import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js
import PythonProject from "./python";

const projects = [
    {
        name: "Market Place Builder",
        description: "A dynamic marketplace platform built with Next.js, TypeScript, and Tailwind CSS, featuring Sanity CMS for content management.",
        github: "https://github.com/Huzaifaabdulrab/Market-place-builder-hackathon",
        vercel: "https://market-place-builder-hackathon-ddy1.vercel.app/"
    },
    {
        name: "E-Commerce Website",
        description: "A modern and fully responsive e-commerce platform built using React, Vite, Tailwind CSS, and Bootstrap.",
        github: "https://github.com/Huzaifaabdulrab/SkyMart",
        vercel: "https://skymartweb.netlify.app"
    }
    ,{
        name: "Resume Builder",
        description: "Built with HTML, CSS3, TypeScript, and JavaScript. Includes PDF download.",
        github: "https://github.com/Huzaifaabdulrab/Hackathon-project-2",
        vercel: "https://hackathon-project-2-gaeh-imyk7swyp-huzaifaabdulrabs-projects.vercel.app/"
    },
    {
        name: "SkyPix",
        description: "Responsive drone camera website built with HTML and CSS.",
        github: "https://github.com/Huzaifaabdulrab/skypix",
        vercel: "https://skypix-bice.vercel.app/"
    },
    {
        name: "GrillUp (Custom CSS)",
        description: "Next.js project styled with custom CSS, fully responsive.",
        github: "https://github.com/Huzaifaabdulrab/GrillUp-milestone2",
        vercel: "https://grill-up-milestone2-ti3l.vercel.app/"
    },
    {
        name: "GrillUp (Tailwind CSS)",
        description: "Similar project using Tailwind CSS for styling.",
        github: "https://github.com/Huzaifaabdulrab/GrillUp-",
        vercel: "https://grill-up-qex4.vercel.app/"
    },
    {
        name: "Facebook Clone",
        description: "HTML and CSS, not responsive.",
        github: "https://github.com/Huzaifaabdulrab/Facebook-clone-",
        vercel: "https://facebook-clone-roan-five.vercel.app/"
    },
    {
        name: "Student Card Generator",
        description: "Student card generator with Next.js and props.",
        github: "https://github.com/Huzaifaabdulrab/STD-Card-Using-Props",
        vercel: "https://std-card-using-props.vercel.app/"
    },
    {
        name: "Component-Based Assignment",
        description: "Next.js project focused on components.",
        github: "https://github.com/Huzaifaabdulrab/Component-Base-Assignment-Next.js",
        vercel: "https://component-base-assignment-next-js.vercel.app/"
    },
    {
        name: "CSS Card Design",
        description: "Basic card design created while learning CSS.",
        github: "https://github.com/Huzaifaabdulrab/Card-Desing",
        vercel: "https://card-desing.vercel.app/"
    }
];

export default function Projects() {
    return (
        <div className="py-28 px-6 bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#091057]">My Web Development Projects</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {projects.map((project, index) => (
                    <div key={index} className="w-full max-w-sm bg-white shadow-xl rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold mb-2 text-[#091057]">{project.name}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <Link href={project.github}>
                                <p className="text-blue-500 hover:underline">
                                    GitHub
                                </p>
                            </Link>
                            <Link href={project.vercel}>
                                <p className="flex items-center text-blue-500 hover:underline">
                                    View Project <FaExternalLinkAlt className="ml-2"/>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
    <PythonProject/>
        </div>
    
    );
}

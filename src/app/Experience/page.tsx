'use client'
import { useEffect } from "react";
import logo from "../../public/Images/sklogo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogData {
    date: string;
    category: string;
    title: string;
    description: string;
    author: string;
    image: any;
    stack?: string[];
    animation: string;
}

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        // AOS.refresh(); 
    }, []);

    const blogData: BlogData[] = [
        {
            date: "2024",
            category: "Self Project",
            title: "Frontend Development Journey",
            description: "As a self-taught frontend developer, I have built multiple projects using Next.js, TypeScript, and custom CSS. From creating dynamic websites to interactive user interfaces, each project reflects my passion for crafting seamless web experiences.",
            author: "Huzaifa Abdulrab",
            image: logo,
            stack: ["Next.js", "TypeScript", "Custom CSS", "Vercel"],
            animation: "fade-up",
        },
        {
            date: "Jan 01",
            category: "Development",
            title: "Frontend Development",
            description: "In collaboration with Skytech, I contributed to creating high-performance web applications utilizing Next.js and React. This project focused on delivering seamless user experiences and modern interfaces with optimized performance.",
            author: "Skytech.",
            image: logo,
            stack: ["Next.js", "TypeScript", "Custom CSS", "Vercel"],
            animation: "fade-down",
        },
    ];

    return (
        <>
            <h1 id="Service" className="text-[#091057] font-bold text-4xl text-center pt-10 mt-14">
                Experience
            </h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -mx-4 -my-8">
                        {blogData.map((blog, index) => (
                            <div key={index} data-aos={blog.animation} className="py-8 px-4 lg:w-1/3">
                                <div className="h-full flex items-start">
                                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                        <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                            {blog.date.split(" ")[0]}
                                        </span>
                                        <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                            {blog.date.split(" ")[1]}
                                        </span>
                                    </div>
                                    <div className="flex-grow pl-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                            {blog.category}
                                        </h2>
                                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                            {blog.title}
                                        </h1>
                                        <p className="leading-relaxed mb-5">{blog.description}</p>
                                        {blog.stack && (
                                            <div className="mb-3">
                                                {blog.stack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium mr-2"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <a className="inline-flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-medium">
                                                {blog.author.charAt(0)}
                                            </div>
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">
                                                    {blog.author}
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;

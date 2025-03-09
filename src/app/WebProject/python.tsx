import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

const pythonProjects = [
    {
        name: "Unit Converter",
        description: "A simple unit converter built using Python and Streamlit.",
        github: "https://github.com/Huzaifaabdulrab/Unit_Converter_Python",
        live: "https://unitconverterpythonpro.streamlit.app/"
    },
    {
        name: "Data Sweeper",
        description: "A Streamlit-based web app for cleaning and processing data efficiently.",
        github: "https://github.com/Huzaifaabdulrab/Data_Sweeper",
        live: "https://python-app-stream.streamlit.app/"
    },
    {
        name: "Password Generator",
        description: "A secure password generator built with Python and Streamlit.",
        github: "https://github.com/Huzaifaabdulrab/Password_Generator",
        live: "https://huzaifapasswordgenerator.streamlit.app/"
    }
];

const PythonProject = () => {
  return (
  <>
  <div className="py-28 px-6 bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#091057]">Python &  Streamlit Project</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {pythonProjects.map((project, index) => (
                    <div key={index} className="w-full max-w-sm bg-white shadow-xl rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold mb-2 text-[#091057]">{project.name}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <Link href={project.github}>
                                <p className="text-blue-500 hover:underline">
                                    GitHub
                                </p>
                            </Link>
                            <Link href={project.live}>
                                <p className="flex items-center text-blue-500 hover:underline">
                                    View Project <FaExternalLinkAlt className="ml-2"/>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
   
  </>)
}

export default PythonProject

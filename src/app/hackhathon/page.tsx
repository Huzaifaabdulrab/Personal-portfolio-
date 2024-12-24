import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
// Define an interface for the project structure
interface Project {
    name: string;
    description: string;
    github: string;
    vercel : string;
}

export default function Hackhathon() {
    const projects: Project[] = [
        
        {
            name: "UI/UX Hackhathon",
            description: "UI/UX hackhathon figma template convert into Next.js project using Tailwind Css & Next.js features",
            github: "https://github.com/Huzaifaabdulrab/giaichackhathon2",
        vercel : "https://morent-five.vercel.app/"
        },
        {
            name: "Resume Builder",
            description: "Built Resume Builder with HTML, CSS3, TypeScript, and JavaScript. Includes PDF download.",
            github: "https://github.com/Huzaifaabdulrab/Hackathon-project-2",
            vercel: "https://hackathon-project-2-gaeh-imyk7swyp-huzaifaabdulrabs-projects.vercel.app/"
        },
    ];

    return (
        <div className="py-72 px-6 bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#091057]">Hackhathon Project</h1>
            <div className="flex  flex-wrap gap-6 justify-center">
                {projects.map((project, index) => (
                    <div key={index} className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold mb-2 text-[#091057]">{project.name}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            {project.github ? (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline flex items-center"
                                >
                                    GitHub <FaExternalLinkAlt className="ml-2" />
                                </Link>
                            ) : (
                                <span className="text-gray-500">GitHub link not available</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

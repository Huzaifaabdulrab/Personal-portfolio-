import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
// Define an interface for the project structure
interface Project {
    name: string;
    description: string;
    github: string;
}

export default function CliProjects() {
    const projects: Project[] = [
        {
            name: "h2-i7-5gen-calculator",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Calculator-Project-GIAIC",
        },
        {
            name: "h2-r2-numguess-game-proj",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Numb-guessing-game",
        },
        {
            name: "atm-machine-project3",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/ATM_MACHINE",
        },
        {
            name: "h2-r2-todo-list",
            description: "CLI project created using TypeScript, Node modules, and Inquirer.",
            github: "https://github.com/Huzaifaabdulrab/TO-DO-LIST",
        },
        {
            name: "h2-p4-currency-convertor",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/CURRENCY_CONVERTO",
        },
        {
            name: "codewizard",
            description: "A versatile command-line application offering various games and challenges created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Command-Line-Game-Suite",
        },
        {
            name: "code-word-counter",
            description: "CLI project created using TypeScript and Node modules, utilizing Inquirer & Chalk.",
            github: "https://github.com/Huzaifaabdulrab/Word-Counter-TS-JS",
        },
        {
            name: "h2-r2-quiz-proj",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/TypeScript-Quiz",
        },
        {
            name: "std-manag-sys-pro",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Student-Management-System-",
        },
        {
            name: "countdown_timer-pro",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Countdown-Timer",
        },
        {
            name: "h2_adv-game",
            description: "CLI project created using TypeScript and Node modules with Inquirer & Chalk.",
            github: "https://github.com/Huzaifaabdulrab/Adventure-Game-Node-project",
        },
        {
            name: "h2_mybank",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/OOP_My_Bank_",
        },
        {
            name: "h2-my-oop",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/MY-OOP",
        },
        {
            name: "async-project",
            description: "CLI project created using TypeScript and Node modules.",
            github: "",
        }
    ];

    return (
        <div className="py-28 px-6 bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#091057]">My TypeScript CLI Projects</h1>
            <div className="flex flex-wrap gap-6 justify-center">
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

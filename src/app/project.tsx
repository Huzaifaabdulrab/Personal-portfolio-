import { FaArrowAltCircleDown } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import Link from Next.js
import WebDevelop from "../public/Images/Web-development.jpg";
import Hackhathon from "../public/Images/hackhathon.png"
import Cli from "../public/Images/Cli.png";

export default function Project() {
  type project = {
    id: number;
    image: StaticImageData;
    name: string;
    description: string;
    icon: JSX.Element;
    url: string; // Add URL property for linking
  };

  const projectList: project[] = [
    {
      id: 1,
      image: WebDevelop,
      name: "Web-Development",
      description:
        "A collection of my web development projects using HTML, CSS, JavaScript, and TypeScript.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/WebProject", // Link to the webProject page
    },
    {
      id: 2,
      image: Hackhathon,
      name: "Hackhathon Projects",
      description:    "Conversion of modern Figma UI designs into responsive websites using Tailwind CSS, HTML, and Next.js.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/hackhathon",
    },
    {
      id: 3,
      image: Cli,
      name: "CLI Tools",
      description:
        "A suite of command-line tools developed in TypeScript for improving productivity and efficiency work for TypeScript.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/CLI", // Corrected to point to the correct CLI route
    },
  ];

  return (
    <div id="Project" className="py-40 ml-8 mt-[-8%]">
      <div className="mx-auto px-4 md:px-16">
        <h1
          className="text-[#091057] text-4xl font-bold mr-10 text-center pb-10"
          style={{ textShadow: "2px 2px 4px #091057" }}
        >
          Project
        </h1>
        <div className="flex flex-wrap w-full justify-center -mx-4">
          {projectList.map((list) => (
            <div
              key={list.id}
              className="w-full sm:w-64 md:w-80 lg:w-[25.5rem] h-auto md:h-[31rem] border border-[#091057] mx-4 my-6 p-4 flex flex-col items-center rounded-lg"
              style={{
                boxShadow: "0 8px 20px rgba(9, 16, 87, 0.35)",
              }}
            >
              <div className="w-full flex justify-center rounded-full">
                <Image
                  src={list.image}
                  alt={list.name}
                  width={400}
                  height={200}
                />
              </div>
              <h2 className="text-[#091057] text-2xl md:text-3xl text-center py-4">
                {list.name}
              </h2>
              <p className="text-[#8b8585] text-center px-4 text-base md:text-[1.2rem]">
                {list.description}
              </p>
              <div className="text-3xl pt-4">{list.icon}</div>
              <Link href={list.url}>
                <button className="bg-[#091057] text-white w-28 p-2 mt-6">
                  Click me
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

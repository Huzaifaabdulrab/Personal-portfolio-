import Image from "next/image";
import PortfolioImg from "../public/Images/portfolio.png";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaCode,
  // FaPaintBrush,
  FaProjectDiagram,
  FaRobot,
  FaPaintBrush,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <div id="About" className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:ml-72 mt-44 mx-4">
        <Image
          src={PortfolioImg}
          alt="Huzaifa Abdulrab Image"
          height={350}
          className="rounded-lg shadow-lg"
        />
        <div className="aboutSec text-center w-full max-w-md md:ml-10 lg:max-w-lg mt-8 lg:mt-10 lg:ml-10 lg:mr-28">
          <h2 className="text-[#135e94] text-2xl font-semibold pb-3">
            My Intro
          </h2>
          <h1 className="Intro text-[#091057] text-3xl font-bold pb-5">
            About Me
          </h1>
          <p className="text-[#8b8585] mb-4">
  Hi, I’m <span className="font-semibold">Huzaifa Abdulrab</span>, a passionate Frontend Developer specializing in crafting modern, responsive, and high-performance web applications. With expertise in <span className="font-semibold">HTML, CSS, JavaScript, TypeScript, Next.js, React, Tailwind CSS, Bootstrap, and GitHub</span>, I build seamless, user-friendly digital experiences that prioritize performance, accessibility, and aesthetics. I excel at turning creative concepts into functional solutions, continuously learning and evolving to stay at the forefront of web development.
</p>


          <hr />
          <div className="mb-4 mt-4 justify-center">
          <p className="flex items-center justify-center mt-5 mb-3">
              <FaUser className="mr-2 text-[#091057] " />{" "}
              <p className="font-semibold">Name :</p>
              <span className="inline text-[#33343f] ">
                Huzaifa Abdulrab
              </span>
            </p> 
            <p className="flex items-center gap-2 justify-center ">
              <FaEnvelope className="text-[#091057] " />{" "}
              <p className="font-semibold">Email:</p>
              <span className="inline text-[#33343f] ">huzaifaabdulrab2@gmail.com</span> 
              </p>
            <p className="flex items-center gap-2 justify-center mt-4">
              <FaPhone className="text-[#091057] " />{" "}
              <p className="font-semibold">Contact:</p>
              <span className="inline  text-[#33343f] ">03400292040</span>
            </p>
          </div>
          <hr />
          <h1 className="text-xl font-semibold  text-[#091057] mb-5 pt-5">
            My Interests
          </h1><div className="flex items-center justify-center gap-4 flex-wrap">
  <div className="flex items-center">
    <FaCode className="mr-2 text-[#091057]" />
    <p className="text-[#33343f]">Web Development</p>
  </div>
  <div className="flex items-center">
    <FaProjectDiagram className="mr-2 text-[#091057]" />
    <p className="text-[#33343f]">Project Management</p>
  </div>
  <div className="flex items-center">
    <FaRobot className="mr-2 text-[#091057]" />
    <p className="text-[#33343f]">AI & Automation</p>
  </div>
  <div className="flex items-center">
    <FaPaintBrush className="mr-2 text-[#091057]" />
    <p className="text-[#33343f]">UI/UX Design</p>
  </div>
</div>

        </div>
      </div>
    </>
  );
}

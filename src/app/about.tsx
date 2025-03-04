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
            Hii, I am <span className="font-semibold">Huzaifa Abdulrab</span>. I
            apply my expertise in HTML, CSS, JavaScript, and TypeScript to
            create dynamic, responsive, and <br /> user-friendly web
            applications.
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
          </h1>
          <p className="flex items-center justify-center  ">
            <FaCode className="mr-2 text-[#091057] " />    <p className="text-[#33343f] ">Coding</p>
            {/* <FaPaintBrush className="mx-2 text-[#091057]" />
            <p className="text-[#33343f] ">Painting</p> */}
            <FaProjectDiagram className="mx-2 text-[#091057]" />
            <p className="text-[#33343f] ">Project</p>
            <FaRobot className="mx-2 text-[#091057]" />
            <p className="text-[#33343f] ">Ai</p>
          </p>
        </div>
      </div>
    </>
  );
}

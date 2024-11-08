import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <>
      <div id="icons" className="box  absolute  flex justify-between items-center w-full  md:w-2/4 lg:w-4/5 p-4 bg-white shadow-lg 
        top-[57rem]  md:top-[35.5rem]  lg:top-[30rem] left-2/4 transform -translate-x-1/2  
        sm:bg-white sm:border sm:border-gray-300 sm:bg-transparent lg:bg-white rounded-full  ">
        <FaFacebook className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        <FaGithub className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
        <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
      </div>
    </>
  );
}
